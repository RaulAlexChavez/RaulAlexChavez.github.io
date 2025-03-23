import React from "react";
import { CertificateCard, HoverableRotation } from "../components";

function WebDev() {
  const mainColorStyle = { color: "#00bcd4", fontWeight: "bold" };
  return (
    <>
      <div className="text-center" style={{ marginTop: "1vw", marginBottom: "2vw" }}>

        <h1 className="super-title"><span className="light-blue-fg fw-bold">{"</ "}</span><span style={mainColorStyle}>Web Development</span><span className="light-blue-fg fw-bold">{" >"}</span></h1>

        <div className="intro">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HoverableRotation rotatingClassName="react-rotate" rotateOnHoverClassName="" hoverableParent="" rotateSpeed={0.7/10} rotateOnHoverExtraSpeed={1.2/10}>
              <img className="react-rotate" src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png" alt="React" style={{ width: '11vw', height: '11vw', borderRadius: '40%', marginRight: '2vw' }} />
            </HoverableRotation>
            <div className="text-start">
              <p>
                I started using <span style={mainColorStyle}>.NET</span> at <span style={mainColorStyle}>university</span>, and since I knew about its <span style={mainColorStyle}>high demanded</span>, I have been going further with various <span style={mainColorStyle}>courses</span>.
              </p>
              <p>
                I have <span style={mainColorStyle}>great proficiency</span> with <span style={mainColorStyle}>C#</span> in general, from <span style={mainColorStyle}>Unity</span> and from <span style={mainColorStyle}>.NET</span>. I have practiced my skills by my own and I would love to apply them in a <span style={mainColorStyle}>professional environment</span>.
              </p>
            </div>
          </div>
        </div>

        <h1 className="super-title">📜 Qualifications</h1>

        <div className="card-group">
          <CertificateCard
            title="Create APIs with REST for .NET"
            image="certificates/apis-net.jpg"
            link="https://platzi.com/p/rachavez/curso/2983-apis-net/diploma/detalle/"
          />
          <CertificateCard
            title="ORM, EF, Minimal API, Fluent API, Migrations"
            image="certificates/entity-framework.jpg"
            link="https://platzi.com/p/rachavez/curso/2987-entity-framework/diploma/detalle/"
          />
          <CertificateCard
            title="Unit testing for C# apps with xUnit"
            image="certificates/unit-testing-csharp.jpg"
            link="https://platzi.com/p/rachavez/curso/7995-unit-testing-csharp/diploma/detalle/"
          />
          <CertificateCard
            title="A must have for version-control"
            image="certificates/git-github.jpg"
            link="https://platzi.com/p/rachavez/curso/1557-git-github/diploma/detalle/"
          />
          <CertificateCard
            title="The basis. One must start somewhere, right?"
            image="certificates/fundamentos-net.jpg"
            link="https://platzi.com/p/rachavez/curso/2883-fundamentos-net/diploma/detalle/"
          />
        </div>

      </div>
    </>
  );
}
export default WebDev;