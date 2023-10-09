import os from "os";
import path from "path";
import axios, { InternalAxiosRequestConfig } from "axios";
import { Sequelize, DataTypes, Op } from "sequelize";
import { camelize, underscore } from "inflection";

import { ACCESS_TOKEN, REFRESH_TOKEN } from ".";

const homedir = os.homedir();
const storePath = path.join(homedir, ".mypass", "store");
const dbUri = path.join(storePath, "kvstore.sqlite");
// sqlite db connection
const sequelize = new Sequelize({ dialect: "sqlite", database: dbUri });
type KV = { key: string; value: string };
const KeyValue = sequelize.define("KeyValue", {
  key: {
    type: DataTypes.STRING(255),
    primaryKey: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
(() => async () => {
  await KeyValue.sync();
})();

const traverse = (o: any, func: Function) => {
  for (const i in o) {
    func.apply(this, [i, o[i], o]);
    if (o[i] != null && typeof o[i] === "object") {
      traverse(o[i], func);
    }
  }
};

// globally configuring axios
export const configure = () => {
  const client = axios.create();

  // default header configs
  client.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  // request interceptor for configuring authorization headers
  client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    if (config?.validateStatus) {
      if (config.url && config.url === "/api/auth/login") {
        const kvItem = await KeyValue.findByPk(REFRESH_TOKEN);
        if (kvItem && kvItem instanceof KeyValue) {
          const refreshToken = (kvItem as unknown as KV).value;
          config.headers.Authorization = `Bearer ${refreshToken}`;
        }
        return config;
      } else if (config.url && config.url === "/api/auth/refresh") {
        const kvItem = await KeyValue.findByPk(REFRESH_TOKEN);
        if (kvItem && kvItem instanceof KeyValue) {
          const refreshToken = (kvItem as unknown as KV).value;
          config.headers.Authorization = `Bearer ${refreshToken}`;
        }
        return config;
      }
      const kvItem = await KeyValue.findByPk(ACCESS_TOKEN);
      if (kvItem && kvItem instanceof KeyValue) {
        const accessToken = (kvItem as unknown as KV).value;
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    }
    return config;
  });
  // camelCase to snake_case converter interceptor (backend api uses snake_case)
  client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const transform = (key: any, value: any, o: any) => {
      if (typeof key === "string") {
        const underscoredKey = underscore(key);
        o[underscoredKey] = value;
        if (underscoredKey !== key) {
          delete o[key];
        }
      } else {
        o[key] = value;
      }
    };

    if (config?.validateStatus) {
      const data = config.data;
      traverse(data, transform);
    }
    return config;
  });

  // snake_case to camelCase converter interceptor (backend api uses snake_case)
  client.interceptors.response.use(
    async (response) => {
      const transform = (key: any, value: any, o: any) => {
        if (typeof key === "string") {
          const camelizedKey = camelize(key, true);
          o[camelizedKey] = value;
          if (camelizedKey !== key) {
            delete o[key];
          }
        } else {
          o[key] = value;
        }
      };

      if (response.config?.validateStatus) {
        const data = response.data;
        traverse(data, transform);
      }
      return response;
    },
    // interceptor for requesting new access tokens, if expired
    async (error) => {
      const originalRequest = error.config;
      if (originalRequest?.validateStatus) {
        if (
          (error.response?.status === 401 || error.response?.status === 422) &&
          originalRequest.url === "/api/auth/refresh"
        ) {
          console.log("Login to continue using the api.");
          await KeyValue.destroy({
            where: {
              key: {
                [Op.or]: [ACCESS_TOKEN, REFRESH_TOKEN],
              },
            },
          });
          await KeyValue.sync();
          return Promise.reject(error);
        }
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          console.log("Requesting new non-fresh access token.");
          const response = await client.post("/api/auth/refresh");
          if (!response) return Promise.reject(error);
          const { accessToken, refreshToken } = response.data as any;
          await KeyValue.upsert({ key: ACCESS_TOKEN, value: accessToken });
          await KeyValue.upsert({ key: REFRESH_TOKEN, value: refreshToken });
          await KeyValue.sync();
          // originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          if (originalRequest?.data != null) {
            try {
              originalRequest.data = JSON.parse(originalRequest.data);
            } catch (_e) {}
          }
          const resp = await client(originalRequest);
          return resp;
        }
      }
      return Promise.reject(error);
    }
  );

  return client;
};
