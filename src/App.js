import './App.css';
import Infobar from './Components/Infobar/Infobar';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import History from './Pages/History';
import Anatomy from './Pages/Anatomy';
import Whereabouts from './Pages/Whereabouts'
import Affinity from './Pages/Affinity';
import { Route, Routes } from "react-router-dom";
import bg from "../src/Images/hgeniaBG2.png";



function App() {
  return (
    <div className="App">
      <Infobar/>
      <Navbar/>
      {/* Routes: Here's a list of routes, choose the best fit one */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/anatomy" element={<Anatomy/>} />
        <Route path="/whereabouts" element={<Whereabouts/>}/>
        <Route path="/affinity" element={<Affinity/>}/>
      </Routes>
    </div>
  );
}

export default App;
