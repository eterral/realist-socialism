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
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/posters"
          element={<DisplayPosters user={user} setUser={setUser} />}
        />
        <Route
          path="/users"
          element={<Users user={user} setUser={setUser} />}
        />
        <Route
          path="/posters/detail/:id"
          element={<DetailPosters user={user} setUser={setUser} />}
        />
        <Route
          path="/poster/edit/:id"
          element={<EditPoster user={user} setUser={setUser} />}
        />
        <Route
          path="/poster/create"
          element={<CreatePoster user={user} setUser={setUser} />}
        />
        <Route
          path="/films"
          element={<DisplayFilms user={user} setUser={setUser} />}
        />
        <Route
          path="/films/detail/:id"
          element={<DetailFilm user={user} setUser={setUser} />}
        />
        <Route
          path="/film/edit/:id"
          element={<EditFilm user={user} setUser={setUser} />}
        />
        <Route
          path="/films/create"
          element={<CreateFilm user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
