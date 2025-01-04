import React, { useEffect } from "react";
import ItemsTable from "./views/itemsTable";
import ItemsDetails from "./views/itemDetails";

import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.initApp()
  }, [])

  return (
    <div className="items-container">
      <ItemsTable />
      <ItemsDetails />
    </div>
  );
}

export default App;
