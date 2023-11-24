import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Practice1 from "./ Practice/Practice1";
import Practice2 from "./ Practice/Practice2";
import Practice3 from "./ Practice/Practice3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="text">ボタン</Button>
        <Practice1 />
        <Practice2 />
        <Practice3 />
        <CssBaseline />
      </header>
    </div>
  );
}

export default App;
