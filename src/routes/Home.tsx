import React from "react";
import "./Home.css";
import "../styles/global.css";
import { HoverableRotation } from "../components";
import {GameDevIcon, SkillCard} from "../components";

const ReactRotation = (
  <HoverableRotation rotatingClassName="react-rotate" rotateOnHoverClassName="" hoverableParent="" rotateSpeed={0.7/10} rotateOnHoverExtraSpeed={1.2/10}>
    <img className="react-rotate" src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png" alt="React" style={{ width: '14vw', height: '14vw'}} />
  </HoverableRotation>
)

function Home() {
  const logicColor = "yellow-fg";
  return (
    <div className="text-center" style={{ marginTop: "1vw" }}>
      <h1 className="super-title">Welcome, <span className="light-blue-fg fw-bold">developer</span> !</h1>
      
      <div className="intro">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className="shadow-custom" src="images/me-cup-chocolate.jpg" alt="My Name" style={{ width: '11vw', height: '11vw', borderRadius: '40%', marginRight: '2vw' }} />
          <div className="text-start">
            <p>
              Hi, I'm <span className="orange-fg fw-bold">Raul Alex Chavez</span>, a passionate developer who loves <span className="orange-fg fw-bold">making the life of people easier</span>. I'm <span className="orange-fg fw-bold">always learning</span> and up to the challenge!
            </p>
            <p>
              I love <span className={`${logicColor} fw-bold`}>organization</span> and{" "}
              <span className={`${logicColor} fw-bold`}>practicality</span>,
              so I'll be happy <span className={`${logicColor} fw-bold`}>designing classes</span> and{" "}
              giving you <span className={`${logicColor} fw-bold`}>that shortcut</span> and{" "}
              <span className={`${logicColor} fw-bold`}>that filter</span> you need.
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
          link="/dotnet"
        />
        <SkillCard
          bgColor="#003300"
          experience="3y+"
          imageComponent={<GameDevIcon type="1"/>}
          title="Game Dev"
          skills={["Unity", "Game Design", "Multiplayer", "C#", "Inspector", "Game Jams", "Godot"]}  
          link="/gamedev"
        />
        <SkillCard
          experience="1y+"
          imageComponent={ReactRotation}
          title="Web Dev"
          skills={["React", "Next", "Mongo", "SQL", "JS", "Bootstrap",  "TypeScript", "HTML"]}  
          link="/webdev"
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