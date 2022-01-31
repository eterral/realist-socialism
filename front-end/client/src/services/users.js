import api from "./apiConfig";
import jwtDecode from "jwt-decode";
import axios from "axios";

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
    const res = await axios.post("http://127.0.0.1:8000/users/token/refresh/", {
      refresh,
    });
    localStorage.setItem("token", res.data.access);
    return res;
  }
  return false;
};
