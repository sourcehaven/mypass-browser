import { client, getAccessToken, getRefreshToken, removeTokens, setAccessToken, setRefreshToken } from ".";

export const getLogin = async () => {
  const response = await client.get("/api/auth/login");
  if (response.status !== 204) {
    removeTokens();
    throw new Error("Login failed.");
  }
};

export const login = async (data: { username: string; password: string; refreshToken?: string }) => {
  const response = await client.post("/api/auth/login", data);
  if (response.status !== 201) throw new Error("Login failed.");
  const { accessToken, refreshToken } = response.data as any;
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};

export const logout = async () => {
  const responseRefreshDelete = await client.delete("/api/auth/logout", {
    headers: { Authorization: `Bearer ${getRefreshToken()}` },
    validateStatus: null,
  });
  const responseAccessDelete = await client.delete("/api/auth/logout", {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
    validateStatus: null,
  });
  if (responseAccessDelete.status !== 204 && responseRefreshDelete.status !== 204) throw new Error("Logout failed.");
  removeTokens();
};
