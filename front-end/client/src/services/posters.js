import api from "./apiConfig";

export const getPosters = async () => {
  try {
    const res = await api.get("/posters");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createPoster = async (poster) => {
  try {
    const res = await api.post("/posters", poster);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updatePoster = async (id, poster) => {
  try {
    const res = await api.put(`/posters/${id}`, poster);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deletePoster = async (id) => {
  try {
    const res = await api.delete(`/posters/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
