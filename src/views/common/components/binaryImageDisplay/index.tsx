import React from "react";

import "./styles.css";

interface BinaryImageProps {
    image?: string;
    name?: string;
}

const BinaryImage: React.FC<BinaryImageProps> = (props) => {
    return (
        <div className="binary-image-container">
            {props.image && props.image.length > 0 ? (
                <img
                    src={`data:image/png;base64,${props.image}`}
                    alt={props.name}
                    className="binary-image"
                    onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.style.display = "none";
                        console.error("Error loading image");
                    }}
                />
            ) : null}
        </div>
    );
};

export default BinaryImage;
