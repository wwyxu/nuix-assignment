import React from "react";
import ItemTab from "./itemTab";
import ItemPanel from "./ItemPanel";

import "./styles.css";
import { Models } from "src/models";

interface ItemsTableProps {
    itemsTable: Models.ItemsTableArray;
    selectedItemIndex: number;
}

const ItemsDetails: React.FC<ItemsTableProps> = (props) => {
    if (props.itemsTable && props.itemsTable[props.selectedItemIndex]) {
        return (
            <div className="item-details">
                <ItemTab />
                <ItemPanel />
            </div>
        );
    }

    return (
        null
    )
}

export default ItemsDetails;
