import React, { useEffect } from "react";
import "./App.css";
import ItemsTable from "./views/itemsTable";
import ItemsDetails from "./views/itemDetails/view";
import { ActionTypes } from "./ops/actions";

const App = (props) => {
  useEffect(() => {
    props.initApp()
  }, [])

  const renderView = () => {
    return (
      <>
        <ItemsTable />
        <ItemsDetails />
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
