import React, { useEffect } from "react";
import "./Home.css";
import "../styles/global.css";
import { HoverableRotation, IconsRow } from "../components";
import {GameDevIcon, SkillCard} from "../components";
import US from "country-flag-icons/react/3x2/US";
import FR from "country-flag-icons/react/3x2/FR";

const ReactRotation = (
  <HoverableRotation rotatingClassName="react-rotate" rotateOnHoverClassName="" hoverableParent="" rotateSpeed={0.7/10} rotateOnHoverExtraSpeed={1.2/10}>
    <img className="react-rotate" src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png" alt="React" style={{ width: '12vw', height: '12vw', margin: "0.8vw 0 0.2vw 0"}} />
  </HoverableRotation>
)

function Home() {

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Raúl ALex Chávez - Home"; // Set the title before printing

    return () => {
        document.title = originalTitle; // Restore original title after printing
    };
  }, []);

  const yellowStyle = { color: "#fddf68", fontWeight: "bold" };
  const orangeStyle = { color: "#f07929", fontWeight: "bold" };
  
    const CoolYlw = (props: {children?: React.ReactNode, style?: React.CSSProperties}):JSX.Element => {
      return <span style={{...yellowStyle, ...props.style}}>{props.children}</span>;
    }
    
    const CoolOrg = (props: {children?: React.ReactNode, style?: React.CSSProperties}):JSX.Element => {
      return <span style={{...orangeStyle, ...props.style}}>{props.children}</span>;
    }
  return (
    <>
      <div className="text-center" style={{ marginTop: "1vw" }}>
        <h1 className="super-title">Welcome, <span className="light-blue-fg fw-bold">developer</span> !</h1>
        
        <div className="intro">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img className="shadow-custom shadow-on-hover scale-on-hover-1-1" src="images/me.jpg" alt="My Name" style={{ width: '12vw', height: '12vw', borderRadius: '40%', marginRight: '2vw'}} />
            <div className="text-start">
              <p>
                Hi, I'm <CoolOrg>Raul Alex Chavez</CoolOrg>, a passionate <CoolOrg>developer</CoolOrg> who loves <CoolOrg>making the life of people easier</CoolOrg>. I'm <CoolOrg>always learning</CoolOrg> and up to the challenge!
              </p>
              <p>
                I love <CoolYlw>organization</CoolYlw> and{" "} <CoolYlw>practicality</CoolYlw>, so I'll be happy <CoolYlw>designing classes</CoolYlw> and{" "} giving you <CoolYlw>that shortcut</CoolYlw> and{" "} <CoolYlw>that filter</CoolYlw> you need!
              </p>
            </div>
          </div>
        </div>

        <h1 id="what-are-we-working-on" className="super-title">What are we working on today?</h1>

        <IconsRow iconClickLink="#what-are-we-working-on" iconsImagesPath={[
          "https://thinkotb.b-cdn.net/wp-content/uploads/2023/01/c-4.svg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzemPW2zVigKv44mjIDfGwrf_Rgzcyu07m_A&s",
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png",
          "https://avatars.githubusercontent.com/u/2092016?s=280&v=4",
          "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/2048px-Godot_icon.svg.png",
          "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png",
          "images/html-5.png",
          "images/css-3.png",
          "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          "https://static-00.iconduck.com/assets.00/typescript-icon-icon-2048x2048-2rhh1z66.png",
          "https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
          "https://img.icons8.com/fluent/512/nextjs.png",
          "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
          "https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png",
          "https://www.svgrepo.com/show/331488/mongodb.svg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
          "",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
          "https://img.icons8.com/?size=512&id=34886&format=png",
          "",
          "https://img.icons8.com/?size=512&id=40670&format=png",
          "https://cdn-icons-png.freepik.com/256/6132/6132222.png?semt=ais_hybrid",
          "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          "https://images.icon-icons.com/112/PNG/512/python_18894.png",
          "",
        ]}/>

        <div className="skillset-card-group">
          <SkillCard
            experience="2y"
            bgColor="#402560"
            image="https://thinkotb.b-cdn.net/wp-content/uploads/2023/01/c-4.svg"
            title=".NET"
            skills={["ASP.NET", "MVC", "Blazor", "Web API", "Entity Framework", "Unit Testing"]}  
            width="45%"
            link="/dotnet"
            dontTranslate
            knowMoreButton
          />
          <SkillCard
            bgColor="#004000"
            experience="4y+"
            imageComponent={<GameDevIcon type="1"/>}
            title="Game Dev"
            skills={["Unity", "Game Design", "Multiplayer", "C#", "Inspector", "Game Jams", "Godot"]}  
            link="/gamedev"
            dontTranslate
            knowMoreButton
          />
          <SkillCard
            bgColor="#222222"
            experience="2y+"
            imageComponent={ReactRotation}
            title="Web Dev"
            skills={["React", "Next", "Mongo", "SQL", "JS", "Bootstrap",  "TypeScript", "HTML"]}  
            link="/webdev"
            dontTranslate
            knowMoreButton
          />
          <SkillCard
            bgColor="#3397e8"
            experience="5y+"
            image="images/teach.png"
            width="50%"
            title="Tutoring"
            skills={["Basic / Intermediate", "Kids / Teens / Adults", "Programming", "Math"]}
            pillBgColor="bg-light"
            pillTextColor="text-dark"
            link="/tutoring"
            knowMoreButton
            knowMoreBtnStyle="btn-outline-light"
          />
          <SkillCard
            bgColor="#660000"
            experience="New!"
            experiencePillColor="bg-danger"
            xpNoAdd
            image="images/ai.png"
            width="50%"
            title="AI"
            skills={["Python", "OpenAI API", "ChatGPT", "Prompt Engineering", "Fine-tuning"]}  
            pillBgColor="bg-primary"
            link="/ai"
            dontTranslate
            knowMoreButton
            knowMoreBtnStyle="btn-outline-warning"
          />
        </div>

        <h1 id="studies" className="super-title">🎓 Studies</h1>
        
        <div className="skillset-card-group">
          <SkillCard
            bgColor="#104010"
            experience="Computational Systems Eng."
            xpNoAdd
            image="https://citecuvp.tij.uabc.mx/wp-content/uploads/2022/10/ISOTIPO-UABC-COLORORIGINAL.png"
            width="85%"
            title=""
            titleStyle={{fontSize: "2vw"}}
            description="I was awarded 4 times a top 1% scholarship. I was part of the University Council and the Competitive Programming Club. I learned a lot about Software Engineering, SDLC, CMMI, UML and Project Management."
            link="https://ingenieria.mxl.uabc.mx/pe_lsc/mapa-curricular-2009-2/"
            linkTargetBlank
          />
          <SkillCard
            experience="UGR - Spain"
            xpNoAdd
            bgColor="#552020"
            image="https://cdn.countryflags.com/thumbs/spain/flag-400.png"
            width="60%"
            title="1 exchange semester!"
            titleStyle={{fontSize: "1.85vw"}}
            description="Earned a scholarship to study in Spain. I learned about Qt, OpenGL, Computer Vision, Linear Algebra, among other topics. I had enriching cultural and language experiences with people from all over the world."
            link="https://grados.ugr.es/ramas/ingenieria-arquitectura/grado-ingenieria-informatica"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#f5f5f5"
            experience="AI / Data Science / Game Dev"
            xpNoAdd
            image="images/grad-hat.png"
            width="50%"
            title="Looking forward to do a Master's degree!"
            titleStyle={{fontSize: "1.8vw", color: "#000"}}
            description="I Mexico or, even better, in Europe! If you have an opportunity, feel free to click this card to reach out and get in touch!"
            descriptionStyle={{color: "#000"}}
            link="#contact"
          />
        </div>

        <h1 id="more-skills" className="super-title">💻 More skills</h1>

        <div className="skillset-card-group">
          <SkillCard
            bgColor="#106679"
            experience="Software Development Cycle"
            experiencePillColor="bg-water"
            xpNoAdd
            image="https://cdn-icons-png.flaticon.com/512/4727/4727480.png"
            width="67%"
            title=""
            titleStyle={{fontSize: "2vw"}}
            description="I have used SCRUM with most of the teams I have worked with. I also have worked with technical documentation, requirements, UML diagrams and more."
          />
          <SkillCard
            experience="IT & Tools"
            xpNoAdd
            bgColor="#dddddd"
            imageComponent={
              <div>
                <IconsRow style={{scale: "0.95", width: "100%", marginTop: "4vw", marginBottom: "4vw"}} iconsImagesPath={[
                  "https://images.icon-icons.com/1156/PNG/512/1486565573-microsoft-office_81557.png",
                  "https://storage.googleapis.com/libraries-lib-production/images/GoogleLogo-canvas-404-300px.original.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/2060px-Visual_Studio_Icon_2019.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",
                  "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161900/wondershare-filmora-video-editor-logo-0E17760862-seeklogo.com.png",
                  "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/trello-icon.png",
                  "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
                  "https://cdn.iconscout.com/icon/free/png-256/free-arduino-226072.png?f=webp",
                  "",
                ]}/>
              </div>
            }
            title=""
            description="I have experience with the Office Suite, the Google Suite, Visual Studio, VS Code, Trello, Filmora for Video Editing, Linux, Arduino, Regular Expressions and more."
            descriptionStyle={{color: "#000"}}
            width="100%"
          />
          <SkillCard
            bgColor="#f7db8f"
            experience="Always learning languages!"
            xpNoAdd
            image="images/grad-hat.png"
            imageComponent={
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5vw", margin: "2vw 0 1.5vw 0" }}>
                <img className="shadow-on-hover scale-on-hover-1-1" src="images/mexico-flag.jpeg" style={{ width: '6.5vw', height: '4.4vw', marginTop: '-0.5vw', scale: "0.8"}}/>
                <US className="shadow-on-hover scale-on-hover-1-1" style={{ width: '6.5vw', height: '4.4vw', marginTop: '-0.5vw', scale: "0.8"}}/>
                <FR className="shadow-on-hover scale-on-hover-1-1" style={{ width: '6.5vw', height: '4.4vw', marginTop: '-0.5vw', scale: "0.8"}}/>
              </div>
            }
            width="55%"
            title="Communication Skills"
            titleStyle={{fontSize: "2vw", color: "#000"}}
            descriptionComponent={
              <div>
                <p style={{fontSize: "1.3vw", color: "#000", margin: "0.1vw -0.6vw 0.8vw -0.6vw"}}>I have solid communication skills and I like to speak in public.</p>
                <p style={{fontSize: "1.3vw", color: "#000", margin: "0 -0.6vw 0 -0.6vw"}}>Spanish is my mother toungue.</p>
                <p style={{fontSize: "1.3vw", color: "#000", margin: "0 -0.6vw 0 -0.6vw"}}>I have great proficiency with English.</p>
                <p style={{fontSize: "1.3vw", color: "#000", margin: "0 -0.6vw 0 -0.6vw"}}>I am improving my  French.</p>
              </div>
            }
            descriptionStyle={{color: "#000"}}
            link="#contact"
          />
        </div>

        <h1 id="about-me" className="super-title">✨ About Me</h1>

        <div className="skillset-card-group">
          <SkillCard
            xpNoAdd
            bgColor="#FFaa99"
            image="images/me.jpg"
            title="Who am I?"
            titleStyle={{color: "#000", fontSize: "2.5vw"}}
            description="I was born in Mexico in the year 2000. I am a very social and curious person. I love to learn and to teach. I'm extroverted and I like helping others."
            descriptionStyle={{color: "#000"}}
            width="65%"
          />
          <SkillCard
            xpNoAdd
            bgColor="#991010"
            image="https://www.svgrepo.com/show/407604/thinking-face.svg"
            title="Problem solving"
            titleStyle={{fontSize: "2.5vw"}}
            description="I tend to be analytic and organized, crafting practical solutions that will bring benefits in the short and long term. I'm always looking for improvemments!"
            width="50%"
          />
          <SkillCard
            xpNoAdd
            bgColor="#ffddff"
            imageComponent={
              <div>
                <IconsRow style={{scale: "1.1", width: "95%", marginTop: "2vw", marginBottom: "2vw"}} iconsImagesPath={[
                  "https://cdn3.iconfinder.com/data/icons/dancing-dancer/214/dance-dancing-010-512.png",
                  "https://cdn-icons-png.freepik.com/512/5253/5253483.png",
                  "https://cdn-icons-png.flaticon.com/512/2884/2884469.png",
                  "https://img.icons8.com/?size=192&id=xVwywmcWtaFa&format=png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png",
                  "https://cdn.shopify.com/s/files/1/1288/8361/files/Super_Smash_Bros_Icon.png?v=1542046569",
                  "https://i.namu.wiki/i/68IJXaJoyROD100Jdq0Cu0cqZ1K2pAU55UaZtiIi-aSiXN3Y8_X93370mYK_eemhd5uFkg1bHdPxnnI9do5vVg.webp",
                ]}/>
              </div>
            }
            title="Hobbies"
            titleStyle={{color: "#000"}}
            description="I like dancing, taekwondo, the drums and, of course, videogames. I'm a Nintendo fan and I like RPGs. If you think you can beat me in Smash, think again."
            descriptionStyle={{color: "#000"}}
            width="100%"
          />
        </div>

        <br/>
        
      </div>
    </>
  );
}
export default Home;

// TODO: Carousel for Skills in Home
// TODO: Tutoring 3+ testimonies 
// TODO: Make responsibe to Mobile