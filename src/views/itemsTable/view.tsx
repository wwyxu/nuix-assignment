import React from "react";
import Table from "../common/components/table";
import { itemsTableHeader } from "src/constants";
import { Models } from "src/models";

interface ItemsTableProps {
    itemsTable: Models.ItemsTableArray;
    selectedItemIndex: number;
    selectItem: Function;
}

const ItemsTable: React.FC<ItemsTableProps> = (props) => {
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
