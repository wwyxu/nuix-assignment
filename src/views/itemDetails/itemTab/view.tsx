import React from "react";
import { ItemDetailsTab } from "src/constants";
import Tabs from "src/views/common/components/tab";

const ItemsTab = (props) => {
    const getActiveTab = () => {
        if (props.itemsTable[props.selectedItemIndex] && props.itemsTable[props.selectedItemIndex].guid) {
            return props.selectedItemsTabs[props.itemsTable[props.selectedItemIndex].guid];
        }

        return null;
    }
    
    return (
        <>
            <Tabs tabs={ItemDetailsTab} activeTab={getActiveTab()} onTabClick={props.selectTab} />
        </>
    );
}

export default ItemsTab;
