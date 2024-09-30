import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";
import "./components/Navbar.css";
import { Routes, Route } from "react-router-dom";
import { DotNet } from "./routes";
import { GameDev } from "./routes";
import { Navbar } from './components';
import React, { ReactNode } from 'react';
import Home from './routes/Home';

function App() {
	const MainApp = (): JSX.Element => {
		return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dotnet" element={<DotNet />} />
				<Route path="/gamedev" element={<GameDev />} />
				<Route path="/webdev" element={<GameDev />} />
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
		</>
	);
}
export default App;

// TODO: Make rresponsive with custom css per file and @media screen size