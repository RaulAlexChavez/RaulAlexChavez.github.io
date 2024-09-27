import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import { DotNet } from "./routes";
import { GameDev } from "./routes";
import { Navbar } from './components';
import React, { ReactNode } from 'react';
import Home from './routes/Home';

function App() {
	const MainApp = (): ReactNode => {
		return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dotnet" element={<DotNet />} />
				<Route path="/gamedev" element={<GameDev />} />
			</Routes>
		);
	}

	return (
		<>
			<div className='row height-100'>
				<div className='col-2 navbar-main-container'>
					<Navbar />
				</div>
				<div className='col-9 main-app-container'>
					<MainApp />
				</div>
			</div>
		</>
	);
}
export default App;

// TODO: Make rresponsive with custom css per file and @media screen size