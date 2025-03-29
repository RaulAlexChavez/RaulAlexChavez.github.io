import React from "react";
import { Link } from "react-router-dom";
import { MX, US, FR } from "country-flag-icons/react/3x2";

const bgColor = "#222a35";
const coolColor1 = "#00b0f0"
const coolColor2 = "#81deff"
const mainColorLight = "fff"
const mainColorDark = "000"
const sectionTitleSize = "0.6cm"
const titleSize = "0.44cm"
const normalTextSize = "0.39cm"

const MeImage = (): JSX.Element => {
    return(
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
            src="images/me.jpg"
            alt="Raúl Alejandro Chávez Valenzuela"
            style={{
                width: "5cm",
                height: "5cm",
                borderRadius: "50%",
                margin: "0.2cm 0 0 0",
                border: "0.05cm solid #000",
            }}
        />
    </div>);
};

const MyLinks = (): JSX.Element => {
    return (
        <div style={{ margin: "0.4cm 0 0 0.7cm", fontSize: titleSize}}>
            <div style={{ margin: "0.2cm"}}>
                <img src="https://cdn-icons-png.flaticon.com/512/4906/4906292.png"
                style={{ width: "1cm", marginRight: "0.2cm"}}/>
                <Link to={"https://raulalexchavez.github.io/"}
                style={{ color: coolColor1}}>
                    My Portfolio Web Page
                </Link>
            </div>
            <div style={{ margin: "0.2cm"}}>
                <img src="images/linkedin.png"
                style={{ width: "0.8cm", marginRight: "0.4cm"}}/>
                <Link to={"https://raulalexchavez.github.io/"}
                style={{ color: coolColor1}}>
                    LinkedIn
                </Link>
            </div>
        </div>
    );
};

const Profile = (): JSX.Element => {
    return (
    <div style={{ margin: "0.7cm 0.7cm 0 0.7cm"}}>
        <h2 style={{fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm"}}>Profile</h2>
        <p style={{fontSize: normalTextSize, color: mainColorLight}}>I’m a social and curious person, very good at speaking in public and explaining ideas. I’m always learning and looking for growth.
        </p>
    </div>
    );
};

const Skills = (): JSX.Element => {
    return (
        <div style={{ margin: "0.6cm 0.7cm 0 0.7cm"}}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: 1, marginRight: "0.2cm" }}>
                    <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Main Skills</h2>
                    <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.5cm" }}>
                        <li>Unity</li>
                        <li>C#</li>
                        <li>Git & GitLab</li>
                        <li>Python</li>
                        <li>Regex</li>
                        <li>SQL</li>
                        <li>C, C++, Java</li>
                        <li>SCRUM</li>
                        <li>Documentation</li>
                        <li>React</li>
                        <li>UML</li>
                    </ul>
                </div>
                <div style={{ flex: 1, marginLeft: "0.2cm" }}>
                    <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Secondary Skills</h2>
                    <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.5cm"}}>
                        <li>Design Patterns</li>
                        <li>HTML, CSS, JS</li>
                        <li>TypeScript</li>
                        <li>MongoDB</li>
                        <li>Bootstrap</li>
                        <li>Azure</li>
                        <li>Arduino</li>
                        <li>Linux</li>
                        <li>Trello</li>
                        <li>Office Tools</li>
                        <li>Video editing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const OtherSkills = (): JSX.Element => {
    return (
        <div style={{ margin: "0.1cm 0.7cm 0 0.7cm"}}>
            <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Other Skills</h2>
            <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.5cm" }}>
                <li>Fast learner</li>
                <li>Organized</li>
                <li>Analytic</li>
                <li>Problem solver</li>
                <li>Effective Communication</li>
            </ul>
        </div>
    );
};

const Languages = (): JSX.Element => {
    const InfoAttribute = (props: { title: string, value: string }) => {
        return (
            <>
                <span style={{ fontSize: normalTextSize, color: coolColor1, fontWeight: "bold"}}>
                    {props.title}:
                </span>
                <span style={{ fontSize: normalTextSize, color: mainColorLight}}>
                    {" " + props.value}
                </span>
            </>
        )
    }
    return (
        <div style={{ margin: "0.5cm 0.7cm 0 0.7cm"}}>
            <h2 style={{ fontSize: titleSize, color: coolColor2}}>Languages</h2>
            <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.8cm", listStyle: "none" }}>
                <li style={{marginBottom: "0.1cm"}}> <MX width={"0.7cm"} style={{ border: "solid #81deff 0.03cm" }}/> <InfoAttribute title="Spanish" value="Mother Tongue"/> </li>
                <li style={{marginBottom: "0.1cm"}}> <US width={"0.7cm"} style={{ border: "solid #81deff 0.03cm" }}/> <InfoAttribute title="Ennglish" value="Conversational (B2 - C1)"/> </li>
                <li style={{marginBottom: "0.1cm"}}> <FR width={"0.7cm"} style={{ border: "solid #81deff 0.03cm" }}/> <InfoAttribute title="French" value="Learning (B1)"/> </li>
            </ul>
        </div>
    );
};

const PersonalInfo = (): JSX.Element => {
    const InfoAttribute = (props: { title: string, value: string }) => {
        return (
            <>
                <span style={{ fontSize: normalTextSize, color: coolColor1, fontWeight: "bold"}}>
                    {props.title}:
                </span>
                <span style={{ fontSize: normalTextSize, color: mainColorLight}}>
                    {" " + props.value}
                </span>
            </>
        )
    }

    return (
        <div style={{ margin: "0.5cm 0.7cm 0 0.7cm"}}>
            <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Personal Info</h2>
            <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.8cm", listStyle: "none" }}>
                <li> <InfoAttribute title="Email" value="chavezra.work@gmail.com"/> </li>
                <li> <InfoAttribute title="Birthday" value="08/Oct/2000"/> </li>
                <li> <InfoAttribute title="Phone" value="(+52) 33 5120 3757"/> </li>
            </ul>
        </div>
    );
};

const CVHeader = () : JSX.Element => {
    return (
        <div style={{ backgroundColor: bgColor, margin: "0", padding: "0", height: "2.5cm"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1 style={{color: "#fff", fontWeight: "bold", fontSize: "0.8cm",
                padding: "0.2cm 0 0 0"}}>
                    Raúl Alejandro Chávez Valenzuela
                </h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h2 style={{color: coolColor1, fontWeight: "bold", fontSize: "0.6cm",
                padding: "0 0 0 0"}}>
                    Software Engineer | Game Developer | Programming Tutor
                </h2>
            </div>
        </div>
    )
}

const CV = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0", padding: "0", fontFamily: "Bahnschrift"}}>
            <div
            className="cv-container"
            style={{
                width: "21cm",
                height: "29.7cm",
                margin: "0",
                padding: "0",
                backgroundColor: "#fff",
                lineHeight: "1.2",
            }}>

                <CVHeader/>

                <div style={{ display: "flex", width: "100%", height: "27.2CM", margin: "0", padding: "0"}}>
                    <div style={{ flex: 2, textAlign: "left", backgroundColor: bgColor }}>
                        <MeImage/>
                        <MyLinks/>
                        <Profile/>
                        <Skills/>
                        <OtherSkills/>
                        <Languages/>
                        <PersonalInfo/>
                    </div>
                    <div style={{ flex: 3, textAlign: "left" }}>
                        {/* Content for the right column */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CV;