import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MX, US, FR, ES, DE } from "country-flag-icons/react/3x2";
import { BriefcaseBusiness, Code, GraduationCap, LucideProps, Printer } from "lucide-react";

// TODO: Make even more responsive

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
const sectionTitleSize = "0.5cm"
const titleSize = "0.37cm"
const normalTextSize = "0.35cm"
const headerTextSize = "0.8cm"

const CVHeader = (): JSX.Element => {
    return (
        <div className="px-3 flex flex-col h-full md:print:h-[2.5cm] print:h-[2.5cm]" style={{ backgroundColor: bgColor, margin: "0", padding: "0"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 className={`font-[${headerTextSize}cm]`} style={{
                    color: "#fff", fontWeight: "bold",
                    padding: "0.2cm 0 0 0"
                }}>
                    Raúl Alejandro Chávez Valenzuela
                </h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h2 style={{
                    color: coolColor1, fontWeight: "bold", fontSize: "0.6cm",
                    padding: "0 0 0 0"
                }}>
                    Software Engineer | Fullstack Developer | Game Developer
                </h2>
            </div>
        </div>
    )
}

const MeImage = (): JSX.Element => {
    return (
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
        <div className="flex sm:flex-row sm:justify-center sm:gap-8 sm:-ml-8 md:flex-col md:gap-0 print:gap-0 print:flex-col mb-2 md:ml-6 print:ml-6" style={{ fontSize: titleSize }}>
            <div className="flex flex-row gap-1 items-center ml-2 mb-2 mt-1">
                <img src="https://cdn-icons-png.flaticon.com/512/4906/4906292.png"
                    style={{ width: "1cm", marginRight: "0.2cm" }} />
                <Link to={"https://raulalexchavez.github.io/"}
                    style={{ color: coolColor1 }}>
                    My Portfolio Web Page
                </Link>
            </div>
            <div className="flex flex-row gap-1 items-center ml-2">
                <img src="images/linkedin.png"
                    style={{ width: "0.8cm", marginRight: "0.4cm" }} />
                <Link to={"https://raulalexchavez.github.io/"}
                    style={{ color: coolColor1 }}>
                    LinkedIn
                </Link>
            </div>
        </div>
    );
};

const Profile = (): JSX.Element => {
    return (
        <div style={{ margin: "0.7cm 0.7cm 0 0.7cm" }}>
            <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Profile</h2>
            <p style={{ fontSize: normalTextSize, color: mainColorLight }}>
                I’m social, curious and openminded. I like speaking in public, explaining ideas and helping others.
                I’m always learning and looking for growth.
            </p>
            <p style={{ fontSize: normalTextSize, color: mainColorLight, marginTop: "-0.25cm" }}>
                I have a focus on client satisfaction and UX. My goal is to make the life of the users easier.
            </p>
            <p style={{ fontSize: normalTextSize, color: mainColorLight, marginTop: "-0.25cm" }}>
                I also love multicultural interactions!
            </p>
        </div>
    );
};

const top_skill_list = [
    "C#",
    ".NET",
    "Entity Framework",
    "Next.js",
    "React",
    "SQL",
    "Unity for Game Dev",
    "Git & GitLab",
]

const secondary_skill_list = [
    "Python",
    "Regex",
    "Tailwind CSS",
    "HTML, CSS, JS",
    "TypeScript (TS)",
    "MongoDB",
    "C, C++, Java",
    "Arduino",
]

const other_skill_list = [
    "UML diagrams and documentation",
    "Design Patterns",
    "SCRUM and Kanban",
    "Analytic and problem solver",
    "Effective Communication",
    "Fast learner",
    "Organized",
]

const Skills = (): JSX.Element => {
    return (
        <div style={{ margin: "0.6cm 0.7cm 0 0.7cm" }}>
            <div className="flex flex-row justify-between">
                <div style={{ flex: 55, marginRight: "0.2cm" }}>
                    <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Top Skills</h2>
                    <ul translate="no" style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.5cm" }}>
                        {top_skill_list.map((skill, index) => (
                            <li key={index} translate="no" style={{ listStyle: "disc" }}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 45, marginLeft: "0.2cm" }}>
                    <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Secondary Skills</h2>
                    <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.5cm" }}>
                        {secondary_skill_list.map((skill, index) => (
                            <li key={index} translate="yes" style={{ listStyle: "disc" }}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const OtherSkills = (): JSX.Element => {
    return (
        <div className="ml-6 mt-6 sm:mt-4 md:mt-0 print:mt-0">
            <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Other Skills</h2>
            <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.5cm" }}>
                {other_skill_list.map((skill, index) => (
                    <li key={index} translate="no" style={{ listStyle: "disc" }}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

const Languages = (): JSX.Element => {
    const InfoAttribute = (props: { title: string, value: string }) => {
        return (
            <>
                <span style={{ fontSize: normalTextSize, color: coolColor1, fontWeight: "bold" }}>
                    {props.title}:
                </span>
                <span style={{ fontSize: normalTextSize, color: mainColorLight }}>
                    {" " + props.value}
                </span>
            </>
        )
    }
    return (
        <div style={{ margin: "0.5cm 0.7cm 0 0.7cm" }}>
            <h2 style={{ fontSize: titleSize, color: coolColor2 }}>Languages</h2>
            <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.8cm", listStyle: "none" }}>
                <li className="flex flex-row gap-1 items-center" style={{ marginBottom: "0.1cm" }}> <MX width={"0.7cm"} style={{ border: "solid #81deff 0.03cm" }} /> <InfoAttribute title="Spanish" value="Mother Tongue" /> </li>
                <li className="flex flex-row gap-1 items-center" style={{ marginBottom: "0.1cm" }}> <US width={"0.7cm"} style={{ border: "solid #81deff 0.03cm" }} /> <InfoAttribute title="English" value="Conversational (B2 - C1)" /> </li>
                <li className="flex flex-row gap-1 items-center" style={{ marginBottom: "0.1cm" }}> <FR width={"0.7cm"} style={{ border: "solid #81deff 0.03cm" }} /> <InfoAttribute title="French" value="Conversational (B2)" /> </li>
                <li className="flex flex-row gap-1 items-center" style={{ marginBottom: "0.1cm" }}> <DE width={"0.7cm"} style={{ border: "solid #81deff 0.03cm" }} /> <InfoAttribute title="German" value="Learning (A1)" /> </li>
            </ul>
        </div>
    );
};

const PersonalInfo = (): JSX.Element => {
    const InfoAttribute = (props: { title: string, value: string }) => {
        return (
            <>
                <span style={{ fontSize: normalTextSize, color: coolColor1, fontWeight: "bold" }}>
                    {props.title}:
                </span>
                <span style={{ fontSize: normalTextSize, color: mainColorLight }}>
                    {" " + props.value}
                </span>
            </>
        )
    }

    return (
        <div style={{ margin: "0.5cm 0.7cm 0 0.7cm" }}>
            <h2 style={{ fontSize: titleSize, color: coolColor2, marginBottom: "0.1cm" }}>Personal Info</h2>
            <ul style={{ fontSize: normalTextSize, color: mainColorLight, marginLeft: "-0.8cm", listStyle: "none" }}>
                <li> <InfoAttribute title="Email" value="chavezra.work@gmail.com" /> </li>
                <li> <InfoAttribute title="Birthday" value="08/Oct/2000" /> </li>
                <li> <InfoAttribute title="Phone" value="(+52) 33 5120 3757" /> </li>
            </ul>
        </div>
    );
};

interface SectionTitleProps {
    icon: React.ComponentType<LucideProps>;
    title: string;
    imgWidthDiff?: number;
    imgRightMarginDiff?: number;
    imgLeftMarginDiff?: number;
}

const SectionTitle = (props: SectionTitleProps) => {
    return (
        <>
            <div className="flex flex-row items-center gap-2 ml-4" >
                <props.icon className="text-black -mt-2" />
                <h1 style={{ fontSize: sectionTitleSize, color: mainColorDark, fontWeight: "lighter" }}>{props.title}</h1>
            </div>
            <hr style={{ flex: 1, height: "0.07cm", border: "none", backgroundColor: mainColorDark, margin: "-0.1cm 0.4cm 0.15cm 0.4cm" }} />
        </>
    );
}

const WorkInfo = (props: { title: string, company: string, period: string, description: string, contact?: string, skills: string[], dontTranslateTitle?: boolean }): JSX.Element => {
    return (
        <div className="flex flex-col" style={{ margin: "-0.2cm 0.5cm -0.3cm 0.5cm" }}>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", marginBottom: "-0.2cm" }}>
                <h2>
                    <span translate={props.dontTranslateTitle ? "no" : "yes"}
                        style={{ fontSize: titleSize, color: coolColor1, fontWeight: "bold" }}
                    >
                        {props.title}
                    </span>
                    {" "}
                    <span translate="no" style={{ fontSize: titleSize, color: mainColorDark, fontWeight: "bold" }}>{props.company}</span>
                    {" "}
                    <span style={{ fontSize: "0.36cm", color: coolColor1, fontWeight: "light" }}>{"[" + props.period + "]"}</span>
                </h2>
            </div>
            <p style={{ color: mainColorDark, fontSize: normalTextSize }}>
                {props.description}
                <span style={{ color: coolColor3, fontSize: "0.36cm" }}>{props.contact}</span>
            </p>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "center", marginTop: "-0.35cm" }}>
                {props.skills.map((skill, index) => (
                    <>
                        <span key={index} translate="no"
                            style={{ margin: "0 0.1cm 0 0", height: "0.6cm", fontSize: normalTextSize, color: "gray" }}
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
        <div>
            <SectionTitle icon={BriefcaseBusiness} title="Professional Experience" imgWidthDiff={0.1} imgRightMarginDiff={-0.1} />
            <WorkInfo
                title="Software Developer" dontTranslateTitle company="CISZ (Government Entity)" period="May 2025 – Now"
                description="As a fullstack developer with .NET, Entity Framework and Next, I've worked on systems for government entities from requirements to deployment,
                including warehouse management, among others. "
                // contact="[Tech Chief: Denise Oliveros - 33 ???? ????]"
                skills={[".NET", "EF", "Next", "Tailwind CSS", "SQL (SSMS)", "S3", "IIS"]}
            />
            <WorkInfo
                title="Jr IT Consultant & Sw Dev" dontTranslateTitle company="Gebartech" period="Ene 2024 – Nov 2024"
                description="I’ve participated in the analysis and development of web apps for specific needs, closely interacting with the client and end users."
                skills={["Next", "React", "TypeScript", "Express", "Bootstrap", "MongoDB"]}
            />
            <WorkInfo
                title="Game Developer" dontTranslateTitle company="BC Media Lab" period="Dec 2021 – Oct 2023"
                description="Published a mobile game in the Play Store and worked on a PC/Console project. Implemented systems such as Multiplayer, Saving Data, RPG Stats and Combat. "
                contact="[Tech leader: Edgar Leal - 664 266 9991]"
                skills={["Unity", "C#", "System Design", "Git", "GitLab", "SCRUM", "Documentation"]}
            />
        </div>
    );
}

const SkillSetTitle = (props: { icon: string, title: string, sublink: string, dontTranslateTitle?: boolean }): JSX.Element => {
    return (
        <div style={{ marginBottom: "-0.25cm" }}>
            <Link to={"https://raulalexchavez.github.io/#" + props.sublink} target="_blank"
                style={{
                    color: coolColor3, fontSize: sectionTitleSize,
                    display: "flex", justifyContent: "left", alignItems: "center"
                }}
            >
                <p translate={props.dontTranslateTitle ? "no" : "yes"} className={props.icon} style={{ marginRight: "0.3cm" }} /><p>{props.title}</p>
            </Link>
        </div>
    );
}

const SkillSetSection = (props: { icon: string, title: string, sublink: string, content: JSX.Element, skills?: string[], dontTranslateTitle?: boolean }): JSX.Element => {
    return (
        <div
            style={{ margin: "0.3cm 0.2cm 0 0.4cm" }}
        >
            <SkillSetTitle dontTranslateTitle={props.dontTranslateTitle} icon={props.icon} title={props.title} sublink={props.sublink} />
            {props.content}
            <div style={{ marginTop: "0.1cm", fontSize: normalTextSize, color: "gray" }}>
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
        <div>
            <SectionTitle icon={Code} title="Areas of Expertise" imgWidthDiff={-0.05} imgRightMarginDiff={0} imgLeftMarginDiff={0.05} />

            <SkillSetSection icon="bi-microsoft" title=".NET" sublink="/dotnet" dontTranslateTitle
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize }}>
                        Worked heavily with .NET and EF in backend developing apps for government entities.
                        I have also completed various courses in the topic.
                    </div>
                }
                skills={["ASP.NET", "Entity Framework (EF)", "API", "Unit Testing", "MVC", "Blazor"]}
            />
            <SkillSetSection icon="bi-controller" title="Game Development" sublink="/gamedev"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize }}>
                        Published a game in the Play Store and worked on {" "}
                        <Link to={"https://raulalexchavez.github.io/#/gamedev"} target="_blank">many other projects</Link>,
                        some <Link to={"https://raulalexchavez.github.io/#/gamedev"} target="_blank">playabale online now</Link>!
                    </div>
                }
                skills={["Unity", "Game Design", "Multplayer", "C#", "Godot", "Game Jams"]}
            />
            <SkillSetSection icon="bi-browser-chrome" title="Web Development" sublink="/webdev"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize }}>
                        I've worked with Next.js as my tech of choice for frontend for more than 2 years.
                        I also made <Link to={"https://raulalexchavez.github.io/"} target="_blank">my own webpage</Link> with React. See more <Link to={"https://raulalexchavez.github.io/#/webdev"} target="_blank">here</Link>.
                    </div>
                }
                skills={["React", "Next", "MongoDB", "SQL", "PHP", "Typescript", "HTML", "CSS"]}
            />
            <SkillSetSection icon="bi-book" title="Tutoring" sublink="/tutoring"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize }}>
                        I have wide tutoring experience, mainly in math and programming, up to university level. Check out some <Link to={"https://raulalexchavez.github.io/#/tutoring"} target="_blank">testimonies here</Link>.
                    </div>
                }
            />
            <SkillSetSection icon="bi-cpu-fill" title="Artificial Intelligence" sublink="/ai"
                content={
                    <div style={{ color: mainColorDark, fontSize: normalTextSize }}>
                        I'm actively learning AI with a focus in Machine Learning.
                        For now, I can use the OpenAI API for <Link to={"https://raulalexchavez.github.io/#/ai"} target="_blank">in-app integrated ChatGPT capabilities</Link>.
                    </div>
                }
            />
        </div>
    );
}

const SchoolInfo = (props: { flag: JSX.Element, school: string, career: string, place: string, period: string, description: string }): JSX.Element => {
    return (
        <div className="flex flex-col" style={{ margin: "-0.2cm 0.5cm 0 0.5cm" }}>
                <div className="flex flex-row items-center gap-1 mb-2">
                    <span className="-mt-2"> {props.flag}</span>
                    <span style={{ fontSize: titleSize, color: coolColor1, fontWeight: "bold" }}>{props.school}</span>
                    <span style={{ fontSize: "0.39cm", color: mainColorDark, fontWeight: "bold" }}>{props.career}</span>
                    <span style={{ fontSize: "0.34cm", color: coolColor1, fontWeight: "light" }}>{"[" + props.place + "]"}</span>
                    <span style={{ fontSize: "0.34cm", color: coolColor1, fontWeight: "light" }}>{"[" + props.period + "]"}</span>
                </div>
            <p style={{ color: mainColorDark, fontSize: normalTextSize }}>{props.description}</p>
        </div>
    );
}

const Education = (): JSX.Element => {
    const flagStyle: React.CSSProperties = { width: "0.8cm", margin: "0.15cm 0.1cm 0 0" }
    return (
        <div>
            <SectionTitle icon={GraduationCap} title="Education" imgWidthDiff={0.1} imgRightMarginDiff={-0.1} />
            <div style={{ marginBottom: "0.5cm" }} />
            <SchoolInfo
                flag={<ES style={flagStyle} />}
                school="UGR ETSIIT"
                career="Informatics"
                place="Granada, Spain"
                period="Sep 2023 – Feb 2024"
                description="Earned a scholarship to study in Spain. I learnt about Qt, OpenGL, Computer Vision, Linear Algebra, among other topics."
            />
            <SchoolInfo
                flag={<MX style={flagStyle} />}
                school="UABC"
                career="Computational Systems"
                place="México"
                period="Aug 2018 – Jul 2024"
                description="I graduated with honors as a top 1% student.
                I was part of the University Council, the Competitive Programming Club and the Tutoring Program.
                I learned a lot about Software Engineering, SDLC, CMMI, UML and more."
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

    const printableContent = () => (
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

            <CVHeader />

            <div style={{ display: "flex", width: "100%", height: "27.21cm", margin: "0", padding: "0" }}>
                <div style={{ flex: 2, textAlign: "left", backgroundColor: bgColor }}>
                    <MeImage />
                    <MyLinks />
                    <Profile />
                    <Skills />
                    <OtherSkills />
                    <Languages />
                    <PersonalInfo />
                </div>
                <div className="flex-3 flex flex-col gap-3 mt-3" >
                    <ProfessionalExperience />
                    <AreasOfExpertise />
                    <Education />
                </div>
            </div>
        </div>
    )

    const pageShowableContent = () => (
        <div
            className="cv-container overflow-x-auto w-full h-full"
            style={{
                backgroundColor: "#fbfbfb",
                lineHeight: "1.2",
            }}>

            <CVHeader />

            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="flex-2" style={{ textAlign: "left", backgroundColor: bgColor }}>
                    <MeImage />
                    <MyLinks />
                    <Profile />
                    <div className="flex sm:flex-row md:flex-col gap-0 -mt-5">
                        <Skills />
                        <OtherSkills />
                    </div>
                    <div className="flex sm:flex-row md:flex-col gap-0 -mt-5">
                        <Languages />
                        <PersonalInfo />
                    </div>
                </div>
                <div className="flex-3 flex flex-col gap-3 mt-3" >
                    <ProfessionalExperience />
                    <AreasOfExpertise />
                    <Education />
                </div>
            </div>
        </div>
    )

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 0 1cm 0", padding: "0", fontFamily: "Bahnschrift" }}>
            <div className="not-print:hidden">
                {printableContent()}
            </div>
            <div className="not-print:flex print:hidden">
                {pageShowableContent()}
            </div>
            <button
                onClick={() => window.print()}
                style={{
                    position: "fixed",
                    top: "3vw",
                    right: "1vw",
                    padding: "1.5vh 2vw",
                    fontSize: "2vw",
                    backgroundColor: coolColor3,
                    color: mainColorLight,
                    border: "none",
                    borderRadius: "0.3cm",
                    cursor: "pointer",
                }}
                className="no-print flex flex-col"
            >
                <span className="flex flex-row items-center gap-1">
                    <Printer />
                    {" Print"}
                </span>
                <span className="text-sm text-gray-200">A4 recommended</span>
            </button>
        </div>
    )
}

export default CV;