import React, { useEffect, useState } from "react";
import API from "src/services/api";
import BinaryImageDisplay from "src/views/common/components/binaryImageDisplay";

const ItemImage = (props) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        getImage();
    }, [props.selectedItemIndex])

    async function getImage() {
        if (props.itemsTable && props.itemsTable[props.selectedItemIndex] && props.itemsTable[props.selectedItemIndex].guid) {
            const response = await API.image.get(props.itemsTable[props.selectedItemIndex].guid);

            setImage(Buffer.from(response.data, 'binary').toString('base64'))
        }
    }

    return (
        <BinaryImageDisplay image={image} />
    );
}

export default ItemImage;
