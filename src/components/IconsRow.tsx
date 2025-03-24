import React from "react";

interface IconsRowProps {
    iconsImagesPath: string[]
}

const IconsRow = (props: IconsRowProps) : JSX.Element => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5vw", margin: "-1vw 0 1.5vw 0" }}>
            {props.iconsImagesPath.map((iconPath, index):JSX.Element => {
                if (!iconPath) {return <></>}
                let altText = (iconPath.split("/").pop() || "").split(".")[0];
                return <img src={iconPath} alt={altText} className="small-icon" />
            })}
        </div>
    )
}

export default IconsRow;