import React, { PropsWithChildren } from "react";
import { CertificateCard, GameDevIcon, IconsRow, SkillCard } from "../components";

function GameDev() {
  const mainColorStyle = { color: "#22CC22", fontWeight: "bold" };

  const Cool = (props: {children?: React.ReactNode, style?: React.CSSProperties}):JSX.Element => {
    return <span style={{...mainColorStyle, ...props.style}}>{props.children}</span>;
  }

  return (
    <>
      <div className="text-center" style={{ marginTop: "1vw", marginBottom: "2vw" }}>

      <h1 className="super-title"><span className="light-blue-fg fw-bold">{"</ "}</span><Cool>Game Development</Cool><span className="light-blue-fg fw-bold">{" >"}</span></h1>

      <IconsRow iconsImagesPath={[
        "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/2048px-Godot_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
        "https://img.icons8.com/?size=512&id=34886&format=png",
        "",
      ]}/>

        <div className="intro">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <GameDevIcon type="2" style={{ width: '11vw', height: '11vw', borderRadius: '40%', marginRight: '2vw' }}/>
            <div className="text-start">
              <p>
                I have been <Cool>developing games</Cool> with <Cool>Unity</Cool> since <Cool>2019. </Cool>I have also use <Cool>Godot</Cool> and I'm looking forward to learn <Cool>Unreal Engine</Cool>. I'm working on my <Cool>Game Design</Cool> skills as well.
              </p>
              <p>
                I think <Cool>Game Dev</Cool> is very <Cool>fun and rewarding</Cool> to work with. You can <Cool>see and play</Cool> what you do, including the <Cool>bugs</Cool> (sorry, the <Cool style={{fontStyle: "italic"}}>features</Cool>). I <Cool>always love</Cool> to work in <Cool>Game Dev</Cool>!
              </p>
            </div>
          </div>
        </div>

        <h1 className="super-title">📜 Experience</h1>

        <div className="skillset-card-group">
          <SkillCard
            experience="BC Media Lab"
            xpNoAdd
            bgColor="#bb420c"
            image="images/bcml.png"
            title="Game Programmer"
            titleStyle={{fontSize: "2vw"}}
            description="I worked 2 years (2021-2023) with a small team under SCRUM-ban. I was responsible for systems such as the multiplayer, combat stats, save system, and more."
            width="53%"
            link="https://www.bcmedialab.com/"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#157f41"
            experience="Click to play in itch.io now!"
            xpNoAdd
            image="https://gitlab.com/awsomegames/oworld/-/raw/main/media/images/level_07.jpg"
            width="100%"
            title="Oworld"
            titleStyle={{fontSize: "2vw"}}
            description="A 2D Puzzle Platformer that will make you think! Made with Unity. Click this card to go play it online now!"
            link="https://delphoenyx.itch.io/oworld"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#35083a"
            experience="Click to play in itch.io now!"
            xpNoAdd
            image="images/project-post-mortem.jpg"
            width="100%"
            title="Project Post Mortem"
            titleStyle={{fontSize: "2vw"}}
            description="Made in 48h for the GMTK Game Jam 2021. A 2D Puzzle Platformer where Life and Death have to cooperate. Highlight on the visuals:  pixelart, lighting, and particles."
            link="https://delphoenyx.itch.io/prroject-post-mortem"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#13508f"
            experience="Click to play in itch.io now!"
            xpNoAdd
            image="https://img.itch.zone/aW1nLzEyNzE3ODgzLnBuZw==/original/tW9FFJ.png"
            width="100%"
            title="Alic-IA can do it!"
            titleStyle={{fontSize: "2vw"}}
            description="Made in 48h for a Game Jam. A 2D Puzzle Platformer where you must die in every way possible! I had an amazing team and we loved the result!"
            link="https://lwyz8a.itch.io/al1c-ia-can-do-it"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#141d46"
            experience="Click to play in itch.io now!"
            xpNoAdd
            image="images/grid-admin.jpg"
            width="60%"
            title="Grid Admin"
            titleStyle={{fontSize: "1.7vw"}}
            description="A decision making game, mobile compatible, themed around the software industry."
            descriptionStyle={{fontSize: "1.2vw"}}
            link="https://delphoenyx.itch.io/grid-admin"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#10104f"
            experience="Click to use in itch.io now!"
            xpNoAdd
            image="images/ddb-tool.jpg"
            width="100%"
            title="DDB Teaching Tool"
            titleStyle={{fontSize: "1.7vw"}}
            description="A tool to aid teaching some specific topics DDB. Made with Unity (not a game, though)"
            link="https://delphoenyx.itch.io/bdd-fv"
            linkTargetBlank
          />
        </div>

        <h1 className="super-title">📜 Qualifications</h1>

        <div className="card-group">
          <CertificateCard
            title="C# Scripting for Unity, a little bit of everything"
            image="certificates/desarrollo-unity.jpg"
            link="https://platzi.com/p/rachavez/curso/1413-course/diploma/detalle/"
          />
          <CertificateCard
            title="Elements and life-cycle of a game and its industry"
            image="certificates/creacion-videojuegos.jpg"
            link="https://platzi.com/p/rachavez/curso/1062-course/diploma/detalle/"
          />
          <CertificateCard
            title="Unity for mobile devices"
            image="certificates/movil-unity.jpg"
            link="https://platzi.com/p/rachavez/curso/1488-course/diploma/detalle/"
          />
          <CertificateCard
            title="Game Design essentials"
            image="certificates/diseno-videojuegos.jpg"
            link="https://platzi.com/p/rachavez/curso/1783-course/diploma/detalle/"
          />
          <CertificateCard
            title="Unity 3D basics"
            image="certificates/unity-3d.jpg"
            link="https://platzi.com/p/rachavez/curso/1801-course/diploma/detalle/"
          />
          <CertificateCard
            title="Indie Game Dev Journey"
            image="certificates/direccion-videojuegos-indies.jpg"
            link="https://platzi.com/p/rachavez/curso/2433-course/diploma/detalle/"
          />
          <CertificateCard
            title="A must-have for version-control"
            image="certificates/git-github.jpg"
            link="https://platzi.com/p/rachavez/curso/1557-git-github/diploma/detalle/"
          />
        </div>

      </div>
    </>
  );
}
export default GameDev;