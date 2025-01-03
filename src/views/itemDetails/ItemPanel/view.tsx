import React from "react";
import ItemImage from "./ItemImage";
import ItemProperties from "./itemProperties";
import { ItemDetailsTabValue } from "src/constants";

const ItemsPanel = (props) => {
    const renderPanelBasedOnActiveTab = () => {
        if (props.activeTab === ItemDetailsTabValue.Properties) {
            return <ItemProperties />
        }

        if (props.activeTab === ItemDetailsTabValue.Image) {
            return <ItemImage />
        }

        return null;
    }

    return (
        <>
            {
                renderPanelBasedOnActiveTab()
            }
        </>
    );
}

export default ItemsPanel;
