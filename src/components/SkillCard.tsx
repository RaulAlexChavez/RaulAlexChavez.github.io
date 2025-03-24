import React from "react";
import "./SkillCard.css";
import "../styles/global.css";
import { HoverableRotation } from "../components";
import { Link } from "react-router-dom";

interface SkillCardProps {
  title: string,
  image?: string,
  imageComponent?: JSX.Element,
  experience?: string,
  xpNoAdd?: boolean,
  bgColor?: string,
  skills?: string[],
  width?: string,
  link?: string,
  titleStyle?: React.CSSProperties,
  description?: string,
  descriptionStyle?: React.CSSProperties,
  linkTargetBlank?: boolean
}

const SkillCard = (props: SkillCardProps):JSX.Element => {
  const skillCard = (
    <HoverableRotation
      rotatingClassName="rotating"
      rotateOnHoverClassName="wrapper-rotating"
      hoverableParent="skillset-card"
      rotateSpeed={0.5/10}
      rotateOnHoverExtraSpeed={1.2/10}
    >
      <div className="skillset-card" style={{backgroundColor: props.bgColor ?? "#1e1e1e"}}>
        <div className="skillset-card-title" style={props.titleStyle ?? {}}>{props.title}</div>
        {props.imageComponent ? props.imageComponent : <img className="skillset-card-image" src={props.image} alt={props.title} style={{width: props.width ?? "60%"}}/>}
        <div className="skillset-card-content">
          {props.experience ?
            <span className="badge rounded-pill bg-primary" style={{ marginBottom: "1vw"}}>{props.experience} {props.xpNoAdd ? "" : "XP"}</span>
            : null
          }
          {props.description ?
            <div>
                <p style={props.descriptionStyle ?? { fontSize: "1.3vw"}}>{props.description}</p>
            </div>
            : null
          }
          {
            props.skills ?
            <div>
                {props.skills.map((skill, index) => (
                <span key={index} className="badge rounded-pill bg-secondary skill">{skill}</span>
                ))}
            </div>
            : null
          }
        </div>
      </div>
    </HoverableRotation>
  );

  const withLink = (
    <Link 
      style={{ textDecoration: "None" }} 
      to={props.link ?? ""}
      target={props.linkTargetBlank ? "_blank" : ""}
      onClick={props.linkTargetBlank ? () => {} : () => window.scrollTo(0, 0)}
    >
      {skillCard}
    </Link>
  )

  return props.link ? withLink : skillCard;
}
export default SkillCard;