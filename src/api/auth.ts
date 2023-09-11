import { client, ACCESS_TOKEN, REFRESH_TOKEN } from ".";

const setAccessToken = (token: string) => localStorage.setItem(ACCESS_TOKEN, token);
const setRefreshToken = (token: string) => localStorage.setItem(REFRESH_TOKEN, token);
const removeTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

export const login = async (data: { username: string; password: string, refreshToken?: string }) => {
  const response = await client.post("/api/auth/login", data);
  if (response.status !== 201) throw new Error("Login failed.");
  const { accessToken, refreshToken } = response.data as any;
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};

export const logout = async (data: { refreshToken?: string }) => {
  const response = await client.post("/api/auth/logout", data);
  if (response.status !== 204) throw new Error("Logout failed.");
  removeTokens();
};
