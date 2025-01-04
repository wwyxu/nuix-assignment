import React from "react";
import { ItemDetailsTab } from "src/constants";
import Tabs from "src/views/common/components/tab";

import "./styles.css";
import { Models } from "src/models";

interface ItemsTabProps {
    itemsTable: Models.ItemsTableArray;
    selectedItemIndex: number;
    activeTab: Models.ItemTabValue;
    selectTab: Function;
}

const ItemsTab: React.FC<ItemsTabProps> = (props) => {
    if (props.itemsTable && props.itemsTable[props.selectedItemIndex]) {
        return (
            <div className="tab-container">
                <Tabs
                    tabs={ItemDetailsTab}
                    activeTab={props.activeTab}
                    onTabClick={props.selectTab}
                />
            </div>
        );
    }

    return (
        null
    );
}

export default ItemsTab;
