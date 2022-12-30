import React from "react";
import "./assets/scss/app.scss";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
