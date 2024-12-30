import React from "react";
import { ItemDetailsTab } from "src/constants";
import Tabs from "src/views/common/components/tab";

const ItemsTab = (props) => {
    return (
        <>
            <Tabs tabs={ItemDetailsTab} activeTab={props.activeTab} onTabClick={props.selectTab} />
        </>
    );
}

export default ItemsTab;
