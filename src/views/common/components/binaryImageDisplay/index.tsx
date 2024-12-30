import React from "react";

const ItemCard = (props) => {
    return (
        <>
            {props.image && props.image.length > 0 ? (
                <img
                    src={`data:image/png;base64,${props.image}`}
                    alt="Base64 encoded image"
                    height={props.height}
                    width={props.width}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.style.display = 'none';
                        console.error('Error loading image');
                    }}
                />
            ) : null}
        </>
    );
}

export default ItemCard;
