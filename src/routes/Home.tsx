import React from "react";
import "./Home.css";
import { HoverableRotation } from "../components";

interface SkillCardProps {
  title: string,
  image?: string,
  imageComponent?: JSX.Element,
  experience?: string,
  bgColor?: string,
  skills: string[]
  width?: string
}

const SkillCard = (props: SkillCardProps):JSX.Element => {
  return (
    <HoverableRotation
      rotatingClassName="rotating"
      rotateOnHoverClassName="wrapper-rotating"
      hoverableParent="skillset-card"
      rotateSpeed={0.5/10}
      rotateOnHoverExtraSpeed={1.2/10}
    >
      <div className="skillset-card" style={{backgroundColor: props.bgColor ?? "#1e1e1e"}}>
        <div className="skillset-card-title">{props.title}</div>
        {props.imageComponent ? props.imageComponent : <img className="skillset-card-image" src={props.image} alt={props.title} style={{width: props.width ?? "60%"}}/>}
        <div className="skillset-card-content">
          {props.experience ?
            <span className="badge rounded-pill bg-primary" style={{ marginBottom: "1vw" }}>{props.experience} XP</span>
            : null
          }
          <div>
            {props.skills.map((skill, index) => (
              <span key={index} className="badge rounded-pill bg-secondary skill">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </HoverableRotation>
  );
}

const GameDevIcon = () => {
  return (
    <div className="">
      <div className="gear-container">
        <div className="wrapper-rotating">
          <img className="rotating" src={"images/gear.png"} alt={"engine"} style={{width: "100%", height: "100%"}}/>
        </div>
      </div>
      <img className="skillset-card-image z10" src={"images/videojuego.png"} alt={"engine"} style={{marginTop: "0vw", marginBottom: "-2rem"}}/>
    </div>
  );
}

function Home() {
  const logicColor = "yellow-fg";
  const logicColor2 = "yellow-fg";
  const practicalColor = "cyan-fg";
  const practicalColor2 = practicalColor;
  return (
    <div className="text-center" style={{ marginTop: "1rem" }}>
      <h1 className="super-title" style={{ fontSize: "5vw", marginTop: "2rem", marginBottom: "2rem" }}>Welcome, <span className="light-blue-fg fw-bold">developer</span> !</h1>
      
      <div className="intro">
        <p className="text-start" style={{ fontSize: "1.8vw", marginLeft: "1.5rem", marginRight: "1.5rem" }}>
          Hi, I'm <span className="orange-fg fw-bold">Raul Alex Chavez</span>, a passionate developer who loves making the life of people easier
          and enjoyable. I'm always learning and up to the challenge!
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className="shadow-custom" src="images/me-cup-chocolate.jpg" alt="Your Name" style={{ width: '11rem', height: '11rem', borderRadius: '40%', marginRight: '2rem' }} />
          <div className="text-start">
            <p>
              I love <span className={`${logicColor} fw-bold`}>organization</span> and{" "}
              <span className={`${logicColor} fw-bold`}>logic</span>,
              so I'll be happy <span className={`${logicColor2} fw-bold`}>designing classes</span>,{" "}
              doing <span className={`${logicColor2} fw-bold`}>scalable backend</span> and{" "}
              <span className={`${logicColor2} fw-bold`}>creating cool mechanics for my game</span>.
            </p>
            <p>
              But I'm also <span className={`${practicalColor} fw-bold`}>practical</span> and{" "}
              <span className={`${practicalColor} fw-bold`}>empathic</span>,
              so I'll also be the dev giving you{" "}
              <span className={`${practicalColor2} fw-bold`}>that shortcut</span>{" "}
              for the <span className={`${practicalColor} fw-bold`}>potion you use the most</span>{" "}
              or those <span className={`${practicalColor2} fw-bold`}>filters
                you'd love to have</span> on the app you use everyday.
            </p>
          </div>
        </div>
      </div>
      <h1 className="super-title">What are we working on today?</h1>
      <div className="skillset-card-group">
        <SkillCard
          experience="1y"
          bgColor="#402560"
          image="https://thinkotb.b-cdn.net/wp-content/uploads/2023/01/c-4.svg"
          title=".NET"
          skills={["ASP.NET", "MVC", "Blazor", "Web API", "Entity Framework", "Unit Testing"]}  
          width="53%"
        />
        <SkillCard
          bgColor="#003300"
          experience="3y+"
          imageComponent={<GameDevIcon/>}
          title="Game Dev"
          skills={["Unity", "Game Design", "Multiplayer", "C#", "Inspector", "Game Jams", "Godot"]}  
        />
        <SkillCard
          experience="1y+"
          image="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png"
          title="Web Dev"
          skills={["React", "Next", "Mongo", "SQL", "JS", "Bootstrap",  "TypeScript", "HTML"]}  
        />
      </div>

      <br/>
      <br/>
      
    </div>
  );
}
export default Home;

// TODO: Make Navbar responsibe to Pc
// TODO: Make Navbar responsibe to Mobile
// TODO: Make exerthing else responsive to PC
// TODO: Make exerthing else responsive to Mobile