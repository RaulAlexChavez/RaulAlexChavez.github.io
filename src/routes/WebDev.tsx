import React, { useEffect } from "react";
import { CertificateCard, HoverableRotation, IconsRow, SkillCard } from "../components";

function WebDev() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Raúl ALex Chávez - Web Dev"; // Set the title before printing

    return () => {
        document.title = originalTitle; // Restore original title after printing
    };
  }, []);
  
  const mainColorStyle = { color: "#00bcd4", fontWeight: "bold" };

  const Cool = (props: {children?: React.ReactNode, style?: React.CSSProperties}):JSX.Element => {
    return <span style={{...mainColorStyle, ...props.style}}>{props.children}</span>;
  }

  return (
    <>
      <div className="text-center" style={{ marginTop: "1vw", marginBottom: "2vw" }}>

        <h1 className="super-title"><span className="light-blue-fg fw-bold">{"</ "}</span><span style={mainColorStyle}>Web Development</span><span className="light-blue-fg fw-bold">{" >"}</span></h1>

        <IconsRow iconsImagesPath={[
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
          "https://static-00.iconduck.com/assets.00/php-icon-2048x2048-zjxns1zh.png",
          "",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
          "",
        ]}/>

        <div className="intro">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HoverableRotation rotatingClassName="react-rotate" rotateOnHoverClassName="" hoverableParent="" rotateSpeed={0.7/10} rotateOnHoverExtraSpeed={1.2/10}>
              <img className="react-rotate" src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png" alt="React" style={{ width: '11vw', height: '11vw', borderRadius: '40%', marginRight: '2vw' }} />
            </HoverableRotation>
            <div className="text-start">
              <p>
                <Cool>Web Development</Cool> is needed <Cool>everywhere</Cool>. I'm on my way to become a great <Cool>full-stack developer</Cool> so I can be <Cool>useful everywhere</Cool>.
              </p>
              <p>
                My strength is <Cool>React</Cool>, and I have solid basis for <Cool>HTML</Cool>, <Cool>CSS</Cool>, <Cool>JS</Cool> and <Cool>SQL</Cool>. I have used <Cool>Express.js</Cool>, <Cool>MongoDB</Cool>, <Cool>REST</Cool>, <Cool>Flask</Cool>, among other technologies.
              </p>
            </div>
          </div>
        </div>

        <h1 className="super-title">💡 Experience</h1>

        <div className="skillset-card-group">
          <SkillCard
            experience="Yes, this one!"
            xpNoAdd
            bgColor="#79fefc"
            image="images/my-page.jpg"
            title="My personal page!"
            titleStyle={{fontSize: "2vw", color: "#000"}}
            description="This very page has been built from scratch with React, Bootstrap and love! It's uploaded to GitHub Pages."
            descriptionStyle={{color: "#000"}}
            width="100%"
            link="https://github.com/RaulAlexChavez/RaulAlexChavez.github.io"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#f5f5f5"
            experience="Gebar Technologies [1y]"
            xpNoAdd
            image="https://www.gebartech.com/web/image/website/1/logo/Gebar%20Technologies?unique=ff963d5"
            width="55%"
            title="Jr IT Consultant"
            titleStyle={{fontSize: "2vw", color: "#000"}}
            description="I provided updates to the web system of a VISA agency based on their direct feedback, increasing notably the productivity of the team. Worked with Next.js. MongoDB, Express and more, under Azure."
            descriptionStyle={{color: "#000"}}
            link="https://www.gebartech.com/"
            linkTargetBlank
          />
          <SkillCard
            bgColor="#104010"
            experience="Computational Systems Eng."
            xpNoAdd
            image="https://citecuvp.tij.uabc.mx/wp-content/uploads/2022/10/ISOTIPO-UABC-COLORORIGINAL.png"
            width="100%"
            title="University Projects"
            titleStyle={{fontSize: "2vw"}}
            description="I worked on many school projects with Web Dev, frontend and backend. I learned a lot about the Software Lyfe Cycle and Project Managment."
            link="https://ingenieria.mxl.uabc.mx/pe_lsc/mapa-curricular-2009-2/"
            linkTargetBlank
          />
        </div>

        <h1 className="super-title">📜 Qualifications</h1>

        <div className="card-group">
          <CertificateCard
            title="Network basis, OSI model, TCP/IP"
            image="certificates/redes.jpg"
            link="https://platzi.com/p/rachavez/curso/2225-course/diploma/detalle/"
          />
          <CertificateCard
            title="PHP basis and composer"
            image="certificates/php-composer.jpg"
            link="https://platzi.com/p/rachavez/curso/2024-course/diploma/detalle/"
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
export default WebDev;