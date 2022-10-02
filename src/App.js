import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Donation from './Components/Donation/Donation';
import background from './Images/hgeniaBG.png';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Donation/>
    </div>
  );
}

export default App;
