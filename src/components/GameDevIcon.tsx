import React from "react";
import { HoverableRotation } from "../components";

const GameDevIcon1 = (props: {style?: React.CSSProperties}) => {
    return (
    <HoverableRotation
        rotatingClassName="rotating"
        rotateOnHoverClassName="wrapper-rotating"
        hoverableParent="gear-container"
        rotateSpeed={0.5/10}
        rotateOnHoverExtraSpeed={1.2/10}
    >
        <div className="" style={props.style ?? {}}>
          <div style={{margin: "-2vw 0 1vw 0"}}>
            <div className="gear-container">
                <div className="wrapper-rotating">
                    <img className="rotating" src={"images/gear.png"} alt={"engine"} style={{width: "80%", height: "80%"}}/>
                </div>
            </div>
          </div>
          <img className="skillset-card-image z10" src={"images/videojuego.png"} alt={"engine"} style={{marginTop: "-0.2vw", marginBottom: "0.7vw", width: "50%"}}/>
        </div>
      </HoverableRotation>
    );
  }

  const GameDevIcon2 = (props: {style?: React.CSSProperties}) => {
    return (
    <HoverableRotation
        rotatingClassName="rotating"
        rotateOnHoverClassName="wrapper-rotating"
        hoverableParent="parent"
        rotateSpeed={0.5/10}
        rotateOnHoverExtraSpeed={1.2/10}
    >
        <div className="parent" style={{...(props.style ?? {}), scale: "1.5"}}>
            <div className="gear-container" style={{translate: "-1.5vw -2vw"}}>
                <div className="wrapper-rotating">
                    <img className="rotating" src={"images/gear.png"} alt={"engine"} style={{width: "50%", height: "50%"}}/>
                </div>
            </div>
            <img className="skillset-card-image z10" src={"images/videojuego.png"} alt={"engine"} style={{marginTop: "0vw", marginBottom: "-1vw"}}/>
        </div>
      </HoverableRotation>
    );
  }

  const GameDevIcon = (props: {type: "1" | "2", style?: React.CSSProperties}) => {
    return props.type == "1" ? <GameDevIcon1 style={props.style}/> : <GameDevIcon2 style={props.style}/>;
  }

export default GameDevIcon;