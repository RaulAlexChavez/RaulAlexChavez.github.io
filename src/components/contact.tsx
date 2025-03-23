import React from "react";
import "../styles/global.css";
import US from "country-flag-icons/react/3x2/US";
import MX from "country-flag-icons/react/3x2/MX";
import FR from "country-flag-icons/react/3x2/FR";
import { Link } from "react-router-dom";

interface LanguageLevelProps {
    filledStars: number,
    halfStars: number,
    flag: JSX.Element
}

const LanguageLevel = (props: LanguageLevelProps): JSX.Element => {
    const starStyle: React.CSSProperties = { fontSize: '3vw', fontWeight: 'bold', color: '#dddd00'};
    const star = <p className="bi-star" style={starStyle}></p>;
    const starFill = <p className="bi-star-fill" style={starStyle}></p>;
    const starHalf = <p className="bi-star-half" style={starStyle}></p>;
    const stars = [];

    let totalStars = 0;
    for (let i = 0; i < props.filledStars; i++) {
        stars.push(starFill);
        totalStars++;
    }
    for (let i = 0; i < props.halfStars; i++) {
        stars.push(starHalf);
        totalStars++;
    }
    for (let i = 0; i < 5 - totalStars; i++) {
        stars.push(star);
    }

    return (
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: "0 7.8vw 0 8vw" }} className="text-center">
            {props.flag}{stars}
        </div>
    );
}

const Contact: React.FC = () => {
    const columnStyle: React.CSSProperties = { width: '50%', margin: '0.5vw', marginBottom: "2vw", textAlign: 'left', padding: '0.1vw' };
    const bigTextStyle: React.CSSProperties = { fontSize: '3vw', fontWeight: 'bold', marginBottom: '-2vw' };
    const flagStyle = { width: '6.5vw', height: '6.5vw', marginTop: '-0.5vw' };
    
    return (
        <div style={{ marginTop: '2vw', margin: '0 3vw 0 3vw', borderTop: '3px solid #ccc', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5vw' }}>
                <div style={columnStyle} className="text-center align-items-center">
                    <LanguageLevel filledStars={5} halfStars={0} flag={<img src="images/mexico-flag.jpeg" style={{...flagStyle, height: "4.4vw"}}/>} />
                    <LanguageLevel filledStars={4} halfStars={1} flag={<US style={flagStyle}/>} />
                    <LanguageLevel filledStars={3} halfStars={1} flag={<FR style={flagStyle}/>} />
                </div>
                <div style={{ ...columnStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: "-1vw" }} className="text-center align-items-center">
                    <p className="bi-whatsapp green-fg fw-bold" style={bigTextStyle}>{" "}686 542 1369</p>
                    <p className="bi-envelope fw-bold super-title" style={bigTextStyle}>{" "}chavezra.work@gmail.com</p>
                    <Link className="bi-linkedin fw-bold super-title" style={bigTextStyle} to={"https://www.linkedin.com/in/raulalexchavez/"} target="_blank">{" "}RaulAlexChavez</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;