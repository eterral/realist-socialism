import "./App.css";
import { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import DisplayPosters from "./screens/DisplayPosters/DisplayPosters";

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
      </Routes>
    </div>
  );
}

export default App;
