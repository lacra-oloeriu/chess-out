//import logo from "./logo.svg";
import "./App.css";
import  chessImage from './assets/chess-out.jpg';
import React from'react';


function App() {
  return (
    <div>
      <div className="topbar">
        <button>Home</button>
        <button>About</button>
      </div>
      <h1>Let's paly chess out!</h1>
      <div>
        <img src ={chessImage}  />
      </div>
    </div>
  );
}

export default App;
