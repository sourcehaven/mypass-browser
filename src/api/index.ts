import { configure } from "./_config";

export const ACCESS_TOKEN = "authentication:accessToken";
export const REFRESH_TOKEN = "authentication:refreshToken";

let getAccessToken: () => Promise<string | null>;
let getRefreshToken: () => Promise<string | null>;
let setAccessToken: (token: string) => Promise<void>;
let setRefreshToken: (token: string) => Promise<void>;
let removeTokens: () => Promise<void>;
if (process.env.NODE_ENV === "development" || (process.env.NODE_ENV as string) === "serving") {
  getAccessToken = async () => localStorage.getItem(ACCESS_TOKEN);
  getRefreshToken = async () => localStorage.getItem(REFRESH_TOKEN);
  setAccessToken = async (token: string) => localStorage.setItem(ACCESS_TOKEN, token);
  setRefreshToken = async (token: string) => localStorage.setItem(REFRESH_TOKEN, token);
  removeTokens = async () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  };
} else if (process.env.NODE_ENV === "production") {
  getAccessToken = async () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(ACCESS_TOKEN).then((kv) => {
        return resolve(kv[ACCESS_TOKEN]);
      });
    });
  };
  getRefreshToken = async () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(REFRESH_TOKEN).then((kv) => {
        return resolve(kv[REFRESH_TOKEN]);
      });
    });
  };
  setAccessToken = async (token: string) => await chrome.storage.local.set({ ACCESS_TOKEN: token });
  setRefreshToken = async (token: string) => await chrome.storage.local.set({ REFRESH_TOKEN: token });
  removeTokens = async () => {
    await chrome.storage.local.remove([ACCESS_TOKEN, REFRESH_TOKEN]);
  };
} else {
  throw Error("Configuration error occured. Check your environment variables.");
}
export { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken, removeTokens };

import { getLogin, login, logout } from "./auth";
export { getLogin, login, logout } from "./auth";
import { selectVaultEntry, selectVaultEntries } from "./vault";
export { selectVaultEntry, selectVaultEntries } from "./vault";

export const client = configure();
export default {
  getLogin,
  login,
  logout,
  selectVaultEntry,
  selectVaultEntries,
};
