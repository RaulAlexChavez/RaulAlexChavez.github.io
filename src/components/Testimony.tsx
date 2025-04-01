import React from "react"
import "../styles/global.css"

interface TestimonyProps {
    name?: string;
    location?: string;
    testimony: string;
    img?: string;
}

const Testimony = (props: TestimonyProps): JSX.Element => {
    const defaulImg = "https://cdn-icons-png.freepik.com/256/3135/3135823.png"
    const imgStyle: React.CSSProperties = { width: "80%", height: "80%", borderRadius: "50%", objectFit: "cover", aspectRatio: "1/1" }
    const userNameStyle: React.CSSProperties = { fontSize: "2.5vw", fontWeight: "bold", color: "#3397e8"}
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.3vw" }}>
            <div className="testimony" style={{ display: "grid", gridTemplateColumns: "1fr 4fr", gap: "0", alignItems: "center", width: "90%", textAlign: "center" }}>
                <div>
                    <img className="scale-on-hover-1-1 shadow-on-hover" src={props.img ?? defaulImg} alt="testimony" style={imgStyle} />
                </div>
                <div style={{ textAlign: "left" }}>
                    <h3 style={userNameStyle}>{props.name ?? "Username"} <span style={{ fontSize: "2vw", color: "#77EEFF" }}>{props.location ? (" - " + props.location) : ""}</span></h3>
                    <p>{props.testimony}</p>
                </div>
            </div>
        </div>
    )
}
export default Testimony;