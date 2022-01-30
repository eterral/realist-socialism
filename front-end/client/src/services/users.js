import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/users/account-create/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    const user = jwtDecode(res.data.access);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const res = await api.post("/users/token/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    const user = jwtDecode(res.data.access);
    return user;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const res = await api.post("users/token/refresh-token/", { refresh });
    localStorage.setItem("token", res.data.access);
    return res;
  }
  return false;
};
