import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./services/api";
import ItemTable from "./views/itemTable";

const App = (props) => {

  const test = async () => {
    console.log(await API.image.get("guid1"));
    console.log(await API.items.get());
  }

  test();

  const renderView = () => {
    return (
      <>
        <ItemTable />
      </>
    )
  }

  return (
    <>
      {renderView()}
    </>
  );
}

export default App;
