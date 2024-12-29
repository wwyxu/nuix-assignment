import React from "react";
import Table from "../common/components/table";
import { itemTableHeader } from "src/constants";

const ItemTable = (props) => {
    return (
        <>
            <Table header={itemTableHeader} rows={props.itemsTable} rowClick={props.selectItem}></Table>
        </>
    );
}

export default ItemTable;
