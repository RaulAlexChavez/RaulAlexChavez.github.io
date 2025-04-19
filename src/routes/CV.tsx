import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MX, US, FR, ES } from "country-flag-icons/react/3x2";

const bgColor = "#222a35";
const coolColor1 = "#00b0f0"
const coolColor2 = "#81deff"
const coolColor3 = "#0070c0"
const mainColorLight = "#fff"
const mainColorDark = "#000"
// const sectionTitleSize = "0.58cm"
// const titleSize = "0.43cm"
// const normalTextSize = "0.38cm"
// const headerTextSize = "0.8cm"
const sectionTitleSize = "0.53cm"
const titleSize = "0.37cm"
const normalTextSize = "0.35cm"
const headerTextSize = "0.8cm"

const CVHeader = () : JSX.Element => {
    return (
        <div style={{ backgroundColor: bgColor, margin: "0", padding: "0", height: "2.5cm"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1 style={{color: "#fff", fontWeight: "bold", fontSize: headerTextSize,
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
                    <ul translate="no" style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.5cm" }}>
                        <li translate="no">Unity</li>
                        <li translate="no">C#</li>
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
                        <li translate="no">Office Tools</li>
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

const SectionTitle = (props: {img: string, title: string, imgWidthDiff?: number, imgRightMarginDiff?: number, imgLeftMarginDiff?: number}) => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", margin: "0.3cm 0 0 0.5cm"}}>
                <img src={props.img}
                    style={{
                        width: ((0.9 + (props.imgWidthDiff ?? 0)) + "cm"),
                        margin:
                            "0 " +
                            ((0.5 + (props.imgRightMarginDiff ?? 0)) + "cm") +" " + 
                            "0.3cm " +
                            ((0   + (props.imgLeftMarginDiff ?? 0)) + "cm") }}/>
                <h1 style={{ fontSize: sectionTitleSize, color: mainColorDark, fontWeight: "lighter" }}>{props.title}</h1>
            </div>
            <hr style={{ flex: 1, height: "0.07cm", border: "none", backgroundColor: mainColorDark, margin: "-0.1cm 0.4cm 0.15cm 0.4cm" }} />
        </>
    );
}

const WorkInfo = (props: {title: string, company: string, period: string, description: string, contact?: string, skills: string[], dontTranslateTitle?: boolean}): JSX.Element => {
    return (
        <div style={{margin: "-0.2cm 0.5cm 0 0.5cm"}}>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", marginBottom: "-0.1cm"}}>
                <h2>
                    <span translate={props.dontTranslateTitle ? "no" : "yes"}
                        style={{fontSize: titleSize, color: coolColor1, fontWeight: "bold"}}
                    >
                        {props.title}
                    </span>
                    {" "}
                    <span translate="no" style={{fontSize: titleSize, color: mainColorDark, fontWeight: "bold"}}>{props.company}</span>
                    {" "}
                    <span style={{fontSize: "0.36cm", color: coolColor1, fontWeight: "light"}}>{"[" + props.period + "]"}</span>
                </h2>
            </div>
            <p style={{color: mainColorDark, fontSize: normalTextSize}}>
                {props.description}
                <span style={{color: coolColor3, fontSize: "0.36cm"}}>{props.contact}</span>
            </p>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", marginTop: "-0.3cm"}}>
                {props.skills.map((skill, index) => (
                    <>
                        <span key={index} translate="no"
                            style={{margin: "0 0.1cm 0 0", height: "0.6cm", fontSize: normalTextSize, color: "gray"}}
                        >
                            {skill + (index < props.skills!.length - 1 ? " - " : "")}
                        </span>
                    </>
                ))}
            </div>
        </div>
    );
}

const ProfessionalExperience = () => {
    return (
        <div style={{ marginTop: "0.45cm 0 0 0"}}>
            <SectionTitle img="https://cdn-icons-png.flaticon.com/512/4804/4804197.png" title="Professional Experience" imgWidthDiff={0.1} imgRightMarginDiff={-0.1}/>
            <WorkInfo
                title="Jr IT Consultant & Sw Dev" dontTranslateTitle company="Gebartech" period="Ene 2024 – Nov 2024"
                description="I’ve participated in the analysis and development of web apps under Azure, closely interacting with the client and end users."
                skills={["Next", "React", "TypeScript", "Express", "Bootstrap", "MongoDB"]}
            />
            <WorkInfo
                title="Game Developer" dontTranslateTitle company="BC Media Lab" period="Dec 2021 – Oct 2023"
                description="Published a mobile game in the Play Store and worked on another project. Implemented systems such as Multiplayer, Saving Data, RPG Stats and Combat. "
                contact="[Tech leader: Edgar Leal - 664 266 9991]"
                skills={["Unity", "C#", "Git", "GitLab", "SCRUM", "Documentation"]}
            />
        </div>
    );
}

const SkillSetTitle = (props: {icon: string, title: string, sublink: string, dontTranslateTitle?: boolean}):JSX.Element => {
    return (
        <div style={{ marginBottom: "-0.2cm" }}>
            <Link to={"https://raulalexchavez.github.io/#" + props.sublink} target="_blank"
                style={{
                    color: coolColor3, fontSize: sectionTitleSize,
                    display: "flex", justifyContent: "left", alignItems: "center"
                }}
            >
                <p translate={props.dontTranslateTitle ? "no" : "yes"} className={props.icon} style={{marginRight: "0.3cm"}}/><p>{props.title}</p>
            </Link>
        </div>
    );
}

const SkillSetSection = (props: {icon: string, title: string, sublink: string, content: JSX.Element, skills?: string[], dontTranslateTitle?: boolean}):JSX.Element => {
    return (
        <div
            style={{ margin: "0.3cm 0.2cm 0 0.4cm" }}
        >
            <SkillSetTitle dontTranslateTitle={props.dontTranslateTitle} icon={props.icon} title={props.title} sublink={props.sublink}/>
            {props.content}
            <div style={{marginTop: "0.1cm", fontSize: normalTextSize, color: "gray"}}>
                {
                    props.skills ?
                    (
                        props.skills.map((skill, index) => (
                        <>
                            <span key={index}
                                style={{ margin: "0 0 0 0", height: "0.6cm", fontSize: normalTextSize, color: "gray" }}
                            >
                                {skill + (index < props.skills!.length - 1 ? " - " : "")}
                            </span>
                        </>
                    )))
                    :
                    null
                }
            </div>
        </div>
    );
}

const AreasOfExpertise = (): JSX.Element => {
    return (
        <>
            <SectionTitle img="https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/code.png" title="Areas of Expertise" imgWidthDiff={-0.05} imgRightMarginDiff={0} imgLeftMarginDiff={0.05}/>
                        
            <SkillSetSection icon="bi-microsoft" title=".NET" sublink="/dotnet" dontTranslateTitle
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize}}>
                        I have completed various courses about .NET, Blazor, Unit Testing, APIs, etc.
                        You can see more aobut my experience in my <Link to={"https://raulalexchavez.github.io/#/dotnet"} target="_blank">webpage</Link>.
                    </div>
                }
                skills={["ASP.NET", "MVC", "Blazor", "API", "Entity Framework", "Unit Testing"]}
            />
            <SkillSetSection icon="bi-controller" title="Game Development" sublink="/gamedev"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize}}>
                        Published a game in the Play Store and worked on <Link to={"https://raulalexchavez.github.io/#/gamedev"} target="_blank">many other projects</Link>, some <Link to={"https://raulalexchavez.github.io/#/gamedev"} target="_blank">playabale online now</Link>!
                    </div>
                }
                skills={["Unity", "Game Design", "Multplayer", "C#", "Godot", "Game Jams"]}
            />
            <SkillSetSection icon="bi-browser-chrome" title="Web Development" sublink="/webdev"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize}}>
                        Made <Link to={"https://raulalexchavez.github.io/"} target="_blank">my own webpage</Link> with React. See more <Link to={"https://raulalexchavez.github.io/#/webdev"} target="_blank">here</Link>.
                    </div>
                }
                skills={["React", "Next", "MongoDB", "SQL", "PHP", "Typescript", "HTML", "CSS"]}
            />
            <SkillSetSection icon="bi-book" title="Tutoring" sublink="/tutoring"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize}}>
                        I have wide tutoring experience, mainly in math and programming, up to university level. Check out some <Link to={"https://raulalexchavez.github.io/#/tutoring"} target="_blank">testimonies here</Link>.
                    </div>
                }
            />
            <SkillSetSection icon="bi-cpu-fill" title="Artificial Intelligence" sublink="/ai"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize}}>
                        Can use the OpenAI API for <Link to={"https://raulalexchavez.github.io/#/ai"} target="_blank">in-app integrated ChatGPT capabilities</Link>. I have knowledge in Prompt Engineering and I'm learning more in AI. 
                    </div>
                }
            />
        </>
    );
}

const SchoolInfo = (props: {flag:JSX.Element, school: string, career: string, place: string, period: string, description: string}): JSX.Element => {
    return (
        <div style={{margin: "-0.2cm 0.5cm 0 0.5cm"}}>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", marginBottom: "-0.1cm"}}>
                <h2>
                    {props.flag}
                    <span style={{fontSize: titleSize, color: coolColor1, fontWeight: "bold"}}>{props.school}</span>
                    {" "}
                    <span style={{fontSize: "0.39cm", color: mainColorDark, fontWeight: "bold"}}>{props.career}</span>
                    {" "}
                    <span style={{fontSize: "0.34cm", color: coolColor1, fontWeight: "light", marginLeft: "-0.05cm", marginRight: "0.05cm"}}>{"[" + props.place + "]"}</span>
                    <span style={{fontSize: "0.34cm", color: coolColor1, fontWeight: "light"}}>{"[" + props.period + "]"}</span>
                </h2>
            </div>
            <p style={{color: mainColorDark, fontSize: normalTextSize}}>{props.description}</p>
        </div>
    );
}

const Education = (): JSX.Element => {
    const flagStyle : React.CSSProperties = {width: "0.8cm", margin: "0.15cm 0.1cm 0 0"}
    return (
        <div style={{ margin: "0.45cm 0 0 0"}}>
            <SectionTitle img="https://static-00.iconduck.com/assets.00/graduation-cap-icon-512x335-2rjjt0b3.png" title="Education" imgWidthDiff={0.1} imgRightMarginDiff={-0.1}/>
            <div style={{ marginBottom: "0.2cm"}}/>
            <SchoolInfo
                flag={<ES style={flagStyle}/>}
                school="UGR ETSIIT"
                career="Informatics"
                place="Granada, Spain"
                period="Sep 2023 – Feb 2024"
                description="Earned a scholarship to study in Spain. I learnt about Qt, OpenGL, Computer Vision, Linear Algebra, among other topics."
            />
            <SchoolInfo
                flag={<MX style={flagStyle}/>}
                school="UABC"
                career="Computational Systems"
                place="México"
                period="Aug 2018 – Jul 2024"
                description="I was awarded 4 times a scholarship given to the top 1% students. I was part of the University Council, the Competitive Programming Club and more. I also learned a lot about Software Engineering, SDLC, CMMI, UML and processes in the software industry.."
            />
        </div>
    )
}

const CV = () => {

    useEffect(() => {
        const originalTitle = document.title;
        document.title = "raul-alex-chavez-cv"; // Set the title before printing

        return () => {
            document.title = originalTitle; // Restore original title after printing
        };
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 0 1cm 0", padding: "0", fontFamily: "Bahnschrift"}}>
            <div
            className="cv-container"
            style={{
                width: "21cm",
                height: "29.7cm",
                margin: "0",
                padding: "0",
                backgroundColor: "#fbfbfb",
                lineHeight: "1.2",
            }}>

                <CVHeader/>

                <div style={{ display: "flex", width: "100%", height: "27.21cm", margin: "0", padding: "0"}}>
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
                        <ProfessionalExperience/>
                        <AreasOfExpertise/>
                        <Education/>
                    </div>
                </div>
            </div>
            <button
                onClick={() => window.print()}
                style={{
                    position: "absolute",
                    top: "1vw",
                    right: "1vw",
                    padding: "0.5cm 1cm",
                    fontSize: "2vw",
                    backgroundColor: coolColor3,
                    color: mainColorLight,
                    border: "none",
                    borderRadius: "0.3cm",
                    cursor: "pointer",
                }}
                className="bi-printer no-print"
            >
                {" Print"}
            </button>
        </div>
    )
}

export default CV;