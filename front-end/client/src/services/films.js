import api from "./apiConfig";

export const getFilms = async () => {
  try {
    const res = await api.get("/films");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createFilm = async (film) => {
  try {
    const res = await api.post("/films", film);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateFilm = async (id, film) => {
  try {
    const res = await api.put(`/films/${id}`, film);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFilm = async (id) => {
  try {
    const res = await api.delete(`/films/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
