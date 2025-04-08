import React from "react"
import { Link } from "react-router-dom"

interface CertificateCardProps {
  title: string,
  image: string,
  link?: string,
  new?: boolean,
}
  
const CertificateCard = (props: CertificateCardProps):JSX.Element => {
  const cardContent = (
    <div className="certification-card">
      { props.new ?
        <p className="badge rounded-pill bg-danger" style={{ position: "relative", top: "-1vw", right: "-47%", marginBottom: "0"}}>New!</p>
        :
        <p style={{ position: "relative", top: "-1vw", right: "-47%", paddingBottom: "1.6vw"}}/>
      }
      
      <img className="certification-img" src={props.image} style={{marginTop: "-2.2vw"}}></img>
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