import React from "react";
import { CertificateCard, HoverableRotation, IconsRow, SkillCard } from "../components";

function WebDev() {
  const mainColorStyle = { color: "#df2222", fontWeight: "bold" };

  const Cool = (props: {children?: React.ReactNode, style?: React.CSSProperties}):JSX.Element => {
    return <span style={{...mainColorStyle, ...props.style}}>{props.children}</span>;
  }

  return (
    <>
      <div className="text-center" style={{ marginTop: "1vw", marginBottom: "2vw" }}>

        <h1 className="super-title"><span className="blue-fg fw-bold">{"</ "}</span><span style={mainColorStyle}>AI</span><span className="blue-fg fw-bold">{" >"}</span></h1>

        <IconsRow iconsImagesPath={[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqhD5Rfe6OLhP5QY_Y4nPi28EXAS9OvOqJQ&s",
          "https://cdn-icons-png.flaticon.com/512/5962/5962463.png",
          "https://images.icon-icons.com/112/PNG/512/python_18894.png",
          "https://miro.medium.com/v2/resize:fit:700/0*oRRpMJ9XqkRnYLhW.png",
          "https://www.cursor.com/apple-touch-icon.png",
          "",
          "",
        ]}/>

        <div className="intro">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img className="react-rotate" src="images/ai.png" alt="React" style={{ width: '11vw', height: '11vw', borderRadius: '40%', marginRight: '2vw' }} />
            <div className="text-start">
              <p>
                <Cool>Artificial Intelligence</Cool> is a <Cool>wide term</Cool> nowadays. I'm very <Cool>interested</Cool> in learning <Cool>many of its areas</Cool>, mainly <Cool>Computer Vision</Cool>, <Cool>Deep Learning</Cool>, <Cool>NLP</Cool>, and <Cool>their applications</Cool>.
              </p>
              <p>
              <Cool>Growing my skills</Cool> in <Cool>AI</Cool> is currently my <Cool>main focus</Cool>. So far, I have studied <Cool>Prompt Engineering</Cool> for <Cool>ChatGPT</Cool>-like models and I'm working on <Cool>projects</Cool> that use the <Cool>OpenAI API</Cool>.
              </p>
            </div>
          </div>
        </div>

        <h1 className="super-title">📜 Qualifications</h1>

        <div className="card-group">
          <CertificateCard
            title="ChatGPT: Voice, Images, Analytics, Prompt Eng."
            image="certificates/chatgpt.jpg"
            link="https://platzi.com/p/rachavez/curso/9969-course/diploma/detalle/"
          />
          <CertificateCard
            title="OpenAI API: Text, voice, images, fine-tuning"
            image="certificates/openai-api.jpg"
            link="https://platzi.com/p/rachavez/curso/11458-openai-api/diploma/detalle/"
          />
        </div>

      </div>
    </>
  );
}
export default WebDev;