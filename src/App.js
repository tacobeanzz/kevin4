import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Hero />
    </div>
  );
}

export default App;
