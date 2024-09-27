import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  const logicColor = "yellow-fg";
  const logicColor2 = "yellow-fg";
  const practicalColor = "cyan-fg";
  const practicalColor2 = practicalColor;
  return (
    <div className="text-center" style={{ marginTop: "1rem" }}>
      <h1 className="super-title" style={{ fontSize: "5vw", marginTop: "2rem", marginBottom: "2rem" }}>Welcome, <span className="light-blue-fg fw-bold">developer</span> !</h1>
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
      <h1 className="super-title">What are we working on today?</h1>
      .NET Dev - Game Dev - Web Dev
    </div>
  );
}
export default Home;