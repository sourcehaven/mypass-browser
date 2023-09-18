import { configure } from "./_config";

export const ACCESS_TOKEN = "authentication:accessToken";
export const REFRESH_TOKEN = "authentication:refreshToken";

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
