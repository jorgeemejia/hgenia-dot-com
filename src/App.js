import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import History from './Pages/History';
import { Route, Routes } from "react-router-dom";
import bg from "../src/Images/hgeniaBG.png";



function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${bg})` 
    }}>
      <Navbar/>
      {/* Routes: Here's a list of routes, choose the best fit one */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </div>
  );
}

export default App;
