import React, { useEffect, useState } from "react";
import { Models } from "src/models";
import API from "src/services/api";
import BinaryImageDisplay from "src/views/common/components/binaryImageDisplay";

interface ItemImageProps {
    itemsProperties: Models.ItemsPropertiesArray;
    itemsTable: Models.ItemsTableArray;
    selectedItemsTabs: Models.SelectedItemTabs;
    selectedItemIndex: number;
}

const ItemImage: React.FC<ItemImageProps> = (props) => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        getImage();
    }, [props.selectedItemIndex])

    async function getImage() {
        if (props.itemsTable && props.itemsTable[props.selectedItemIndex] && props.itemsTable[props.selectedItemIndex].guid) {
            const response = await API.image.get(props.itemsTable[props.selectedItemIndex].guid);

            setName(props.itemsTable[props.selectedItemIndex].name);
            setImage(Buffer.from(response.data, 'binary').toString('base64'))
        }
    }

    return (
        <BinaryImageDisplay image={image} name={name} />
    );
}

export default ItemImage;
