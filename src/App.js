import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Portfolio from "./components/Portfolio";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Portfolio />
      <Hero />
    </div>
  );
}

export default App;
