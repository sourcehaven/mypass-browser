import { configure } from "./_config";

export const ACCESS_TOKEN = "authentication:accessToken";
export const REFRESH_TOKEN = "authentication:refreshToken";

import { login, logout } from "./auth";
export { login, logout } from "./auth";

export const client = configure();
export default {
  login,
  logout,
};

