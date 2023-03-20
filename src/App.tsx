import React from "react";
import "./App.css";
import { RandomJoke } from "./poc/components/RandomJoke";
import { RandomProgrammingJoke } from "./poc/components/RandomProgrammingJoke";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Random Joke</h2>
        <RandomJoke />
        <h2>Programming Joke</h2>
        <RandomProgrammingJoke />
      </header>
    </div>
  );
}

export default App;
