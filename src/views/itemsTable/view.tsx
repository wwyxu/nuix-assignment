import React from "react";
import Table from "../common/components/table";
import { itemsTableHeader } from "src/constants";

const ItemsTable = (props) => {
    return (
        <Table
            header={itemsTableHeader}
            rows={props.itemsTable}
            selectedIndex={props.selectedItemIndex}
            rowClick={props.selectItem}
        />
    );
}

export default ItemsTable;
