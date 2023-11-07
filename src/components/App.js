import React from "react";
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { username, city, image } from "../data/user";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <div>
        <p>Username: {username}</p>
        <p>City: {city}</p>
        <img src={image} alt="User's Image" />
      </div>
    </div>
  );
}

export default App;
