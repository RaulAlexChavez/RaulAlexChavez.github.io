import React, { useEffect } from "react";
import "../styles/global.css";
import "./DotNet.css";
import { Link } from "react-router-dom";
import { CertificateCard, IconsRow } from "../components";

function DotNet() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Raúl ALex Chávez - .NET"; // Set the title before printing

    return () => {
        document.title = originalTitle; // Restore original title after printing
    };
  }, []);

  const mainColorStyle = { color: "#AA60CC", fontWeight: "bold" };
  return (
    <>
      <div className="text-center" style={{ marginTop: "1vw", marginBottom: "2vw" }}>

        <h1 className="super-title"><span className="light-blue-fg fw-bold">{"</ "}</span><span style={mainColorStyle}>DotNet</span>{" development "}<span className="light-blue-fg fw-bold">{">"}</span></h1>

        <IconsRow iconsImagesPath={[
        "https://thinkotb.b-cdn.net/wp-content/uploads/2023/01/c-4.svg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzemPW2zVigKv44mjIDfGwrf_Rgzcyu07m_A&s",
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png",
        "https://avatars.githubusercontent.com/u/2092016?s=280&v=4",
        "",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
        "https://img.icons8.com/?size=512&id=34886&format=png",
        "",

      ]}/>

        <div className="intro">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://thinkotb.b-cdn.net/wp-content/uploads/2023/01/c-4.svg" alt="C#" style={{ width: '11vw', height: '11vw', borderRadius: '40%', marginRight: '2vw' }} />
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
            title="Blazor WebAssembly, Models, Services, use APIs"
            image="certificates/blazor-webassembly.jpg"
            link="https://platzi.com/p/rachavez/curso/2983-apis-net/diploma/detalle/"
            new
          />
          <CertificateCard
            title="Create RESTful APIs for .NET"
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
            title="A must-have for version-control"
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
export default DotNet;