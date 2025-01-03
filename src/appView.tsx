import React, { useEffect } from "react";
import ItemsTable from "./views/itemsTable";
import ItemsDetails from "./views/itemDetails";

import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.initApp()
  }, [])

  const renderView = () => {
    return (
      <>
        <div className="items-container">
          <ItemsTable />
          <ItemsDetails />
        </div>
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
