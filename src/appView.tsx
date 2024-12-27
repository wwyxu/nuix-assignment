import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import API from "./services/api";

const App = (props) => {

  const test = async () => {
    console.log(await API.image.get("guid1"));
    console.log(await API.items.get());
  }

  test();

  const renderView = () => {
    return (
      <></>
    )
  }

  return (
    <BrowserRouter>
      {renderView()}
    </BrowserRouter>
  );
}

export default App;
