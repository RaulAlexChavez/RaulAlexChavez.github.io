import React from "react"
import { Link } from "react-router-dom"

interface CertificateCardProps {
  title: string,
  image: string
  link?: string
}
  
const CertificateCard = (props: CertificateCardProps):JSX.Element => {
  const cardContent = (
    <div className="certification-card">
      <img className="certification-img" src={props.image}></img>
      <p className="certification-title" style={{padding: "0.3vw 0.3vw 0 0.3vw"}}>{props.title}</p>
    </div>
  );

  const withLink = (
    <Link style={{textDecoration: "None"}} to={props.link ?? ""} target="_blank">
      {cardContent}
    </Link>
  );

  return props.link ? withLink : cardContent;
}
export default CertificateCard;