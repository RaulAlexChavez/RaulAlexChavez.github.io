import React from "react";
import { CertificateCard, HoverableRotation, IconsRow, SkillCard, Testimony } from "../components";

function WebDev() {
  const mainColorStyle = { color: "#3397e8", fontWeight: "bold" };

  const Cool = (props: {children?: React.ReactNode, style?: React.CSSProperties}):JSX.Element => {
    return <span style={{...mainColorStyle, ...props.style}}>{props.children}</span>;
  }

  return (
    <>
      <div className="text-center" style={{ marginTop: "1vw", marginBottom: "2vw" }}>

        <h1 className="super-title"><span className="light-blue-fg fw-bold">{"</ "}</span><span style={mainColorStyle}>Tutoring</span><span className="light-blue-fg fw-bold">{" >"}</span></h1>

        <IconsRow iconsImagesPath={[
          "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png",
          "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
          "",
          "https://img.icons8.com/?size=512&id=40670&format=png",
          "https://cdn-icons-png.freepik.com/256/6132/6132222.png?semt=ais_hybrid",
          "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          "https://images.icon-icons.com/112/PNG/512/python_18894.png",
          "",
          "",
          "",
          "",
          "https://cdn-icons-png.flaticon.com/512/3471/3471391.png",
          "https://cdn-icons-png.flaticon.com/512/3299/3299966.png",
          "https://cdn-icons-png.freepik.com/512/8263/8263183.png",
          "https://cdn-icons-png.flaticon.com/512/3299/3299943.png",
          "",
          
        ]}/>

        <div className="intro">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img className="react-rotate" src="images/teach.png" alt="Tutoring" style={{ width: '10vw', height: '10vw', marginRight: '3vw' }} />
            <div className="text-start">
              <p>
                I <Cool>love teaching</Cool>. I like helping others <Cool>understand ideas</Cool> in the most <Cool>simple</Cool>, <Cool>interesting</Cool> and <Cool>fun</Cool> way possible. I think <Cool>teachers</Cool> are <Cool>as important as knowledge</Cool> itself.
              </p>
              <p>
                I have always been the <Cool>kid</Cool> who <Cool>helps his classmates</Cool>. I have wide <Cool>tutoring experience</Cool>, mainly in <Cool>math</Cool> and <Cool>programming</Cool>, from <Cool>university level</Cool> to <Cool>elementary school</Cool>, in various contexts: <Cool>presential</Cool>, <Cool>online</Cool>, <Cool>individual</Cool>, <Cool>groups</Cool>, freelance, school programs, and more.
              </p>
            </div>
          </div>
        </div>

        <h1 className="super-title">👤 Testimonies</h1>

        <Testimony
          name="Nicole"
          location="Mexicali, Mexico"
          testimony="Tutor Raul helped me understand programming topics faster, given the little time I had to process information. He made it easier for me to learn quickly and successfully complete my final project for the course. Since I was studying Aerospace Engineering, where programming isn’t a common subject, his guidance was invaluable. Thanks to his tutoring and my effort, I was able to score a perfect 100 on my final project."
          img="testimonies/nicole.jpg"
        />

        {/* Jorge Sánchez - Babo processing */}
        {/* Aleph Lau - Programming lol */}
        {/* Jorge - El wey al que le di asesorías en Starbucks - Programación */}
        {/* El de España de Netherlands - Python or whatever */}
        {/* Abraham (André) - Java or whatever WAITING*/}

        <h1 className="super-title">📜 Diplomas</h1>

        <div className="card-group">
          <CertificateCard
            title="University level tutoring in Programming, while I was still in 1st semester"
            image="certificates/uabc-tutoring.jpg"
            link="https://drive.google.com/file/d/1PWQERy7qXl4WWw4I82u3dm0yYH0iOttj/view?usp=drive_link"
          />
        </div>

      </div>
    </>
  );
}
export default WebDev;