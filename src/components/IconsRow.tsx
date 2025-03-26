import React from "react";

interface IconsRowProps {
    iconsImagesPath: string[],
    iconClickLink?: string,
    style?: React.CSSProperties
}

const IconsRow = (props: IconsRowProps) : JSX.Element => {
    const handleScroll = (e:any, id:string) => {
        e.preventDefault(); // Prevent default anchor behavior
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div style={{width: "75%", margin: "auto", ...(props.style ?? {})}}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5vw", margin: "-1vw 0 1.5vw 0" }}>
                {props.iconsImagesPath.map((iconPath, index): JSX.Element => {
                    if (!iconPath) {return <></>}
                    let altText = (iconPath.split("/").pop() || "").split(".")[0];
                    return<img src={iconPath} alt={altText} className="small-icon"
                        style={{borderRadius: "8%"}}
                        onClick={
                            props.iconClickLink?.toString().includes("#") ? (e) => handleScroll(e, props.iconClickLink!.toString().split("#")[1]) : () => {}
                      }/>
                })}
            </div>
        </div>
    )
}

export default IconsRow;