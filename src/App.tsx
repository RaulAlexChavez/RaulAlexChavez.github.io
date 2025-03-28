import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";
import "./components/Navbar.css";
import { Routes, Route } from "react-router-dom";
import { AI, DotNet, Tutoring } from "./routes";
import { GameDev, WebDev } from "./routes";
import { Navbar, Contact } from './components';
import React, { ReactNode } from 'react';
import Home from './routes/Home';

function App() {
	const MainApp = (): JSX.Element => {
		return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dotnet" element={<DotNet />} />
				<Route path="/gamedev" element={<GameDev />} />
				<Route path="/webdev" element={<WebDev />} />
				<Route path="/tutoring" element={<Tutoring />} />
				<Route path="/ai" element={<AI />} />
			</Routes>
		);
	}

	return (
		<>
			<div className='navbar-main-container position-fixed top-0 bottom-0 start-0'>
				<Navbar />
			</div>
			<div className='main-app-container'>
				<MainApp />
			</div>
			<div id="contact">
				<Contact/>
			</div>
		</>
	);
}
export default App;

// TODO: Make rresponsive with custom css per file and @media screen size