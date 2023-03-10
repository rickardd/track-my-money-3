import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import LineGraph from "./components/LineGraph/LineGraph";
import "./App.css";

function App() {
  const graphData = [
    {
      Name: "2022-Dec",
      Value: 6.2,
    },
    {
      Name: "2022-Oct",
      Value: 10,
    },
    {
      Name: "2022-Sep",
      Value: 3.1,
    },
    {
      Name: "2022-May",
      Value: 160.7,
    },
    {
      Name: "2022-Jan",
      Value: 31.65,
    },
  ];

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Tailwind Test</h1>

      <LineGraph data={graphData} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
