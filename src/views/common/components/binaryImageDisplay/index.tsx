import React from "react";

const BinaryImage = (props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "calc(100% - 50px)",
                position: "relative", // Ensure proper placement in larger containers
            }}
        >
            {props.image && props.image.length > 0 ? (
                <img
                    src={`data:image/png;base64,${props.image}`}
                    alt="Base64 encoded image"
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain", // Maintain aspect ratio, show entire image
                    }}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.style.display = "none";
                        console.error("Error loading image");
                    }}
                />
            ) : null}
        </div>
    );
};

export default BinaryImage;
