import './App.css';
import { Routes, Route} from "react-router-dom";
import DotNet from "./routes/DotNet";
import GameDev from "./routes/GameDev";
import Navbar from './Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dotnet" element={<DotNet />} />
        <Route path="/gamedev" element={<GameDev />} />
      </Routes>
    </>
  );
}
export default App;