import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const App = (props) => {
  const renderView = () => {
    return (
      <></>
    )
  }

  return (
    <BrowserRouter>
      <body>
          {renderView()}
      </body>
    </BrowserRouter>
  );
}

export default App;
