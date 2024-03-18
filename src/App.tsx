import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { DutyList } from "./components/DutyList";

function App() {
  return (
    <div className="App">
      <Header />
      <DutyList />
    </div>
  );
}

export default App;
