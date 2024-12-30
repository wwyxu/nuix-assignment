import React from "react";
import Table from "../common/components/table";
import { itemsTableHeader } from "src/constants";

const ItemsTable = (props) => {
    return (
        <>
            <Table header={itemsTableHeader} rows={props.itemsTable} rowClick={props.selectItem} />
        </>
    );
}

export default ItemsTable;
