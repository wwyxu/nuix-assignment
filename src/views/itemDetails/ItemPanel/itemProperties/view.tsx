import React from "react";
import Card from "src/views/common/components/card";

const ItemProperties = (props) => {
    return (
        <Card data={props.itemsTable[props.selectedItemIndex] || {}} />
    );
}

export default ItemProperties;
