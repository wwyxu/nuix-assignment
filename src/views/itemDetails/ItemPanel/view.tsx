import React from "react";
import ItemImage from "./ItemImage";
import ItemProperties from "./itemProperties";
import { ItemDetailsTabValue } from "src/constants";
import { Models } from "src/models";

interface ItemsPanelProps {
    activeTab: Models.ItemTabValue;
}

const ItemsPanel: React.FC<ItemsPanelProps> = (props) => {
    const renderPanelBasedOnActiveTab = () => {
        switch (props.activeTab) {
            case ItemDetailsTabValue.Properties:
                return <ItemProperties />;
            case ItemDetailsTabValue.Image:
                return <ItemImage />;
            default:
                return null;
        }
    }

    return (
        renderPanelBasedOnActiveTab()
    );
}

export default ItemsPanel;
