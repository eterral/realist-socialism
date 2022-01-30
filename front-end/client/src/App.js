import "./App.css";
import { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import DisplayPosters from "./screens/DisplayPosters/DisplayPosters";
import Users from "./screens/Users/Users";
import DetailPosters from "./screens/DetailPosters/DetailPosters";
import EditPoster from "./screens/EditPoster/EditPoster";
import CreatePoster from "./screens/CreatePoster/CreatePoster";
import DisplayFilms from "./screens/DisplayFilms/DisplayFilms";
import DetailFilm from "./screens/DetailFilm/DetailFilm";
import EditFilm from "./screens/EditFilm/EditFilm";
import CreateFilm from "./screens/CreateFilm/CreateFilm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const grabUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    grabUser();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/posters" element={<DisplayPosters user={user} />} />
        <Route path="/users" element={<Users setUser={setUser} />} />
        <Route path="/posters/detail/:id" element={<DetailPosters />} />
        <Route path="/poster/edit/:id" element={<EditPoster />} />
        <Route path="/poster/create" element={<CreatePoster />} />
        <Route path="/films" element={<DisplayFilms />} />
        <Route path="/films/detail/:id" element={<DetailFilm />} />
        <Route path="/film/edit/:id" element={<EditFilm />} />
        <Route path="/films/create" element={<CreateFilm />} />
      </Routes>
    </div>
  );
}

export default App;
