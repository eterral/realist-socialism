import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/users/account-create/", credentials);
    localStorage.setItem("token", res.data.token);
    const user = jwtDecode(res.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const res = await api.post("/users/token/", credentials);
    localStorage.setItem("token", res.data.token);
    const user = jwtDecode(res.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/users/token/refresh/");
    return res.data;
  }
  return false;
};
