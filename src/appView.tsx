import React, { useEffect } from "react";
import "./App.css";
import ItemTable from "./views/itemTable";
import store from "./store";
import { ActionTypes } from "./ops/actions";

const App = (props) => {
  useEffect(() => {
    store.dispatch({
      type: ActionTypes.APP_INIT,
      payload: null
  });
  }, [])

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
