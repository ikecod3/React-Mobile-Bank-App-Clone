import "./App.css";
import FloatingHero from "./assets/components/FloatingHero";
import HeroWrapper from "./assets/components/HeroWrapper";
import NavBar from "./assets/components/NavBar";

function App() {
  return (
    <>
      <div className="h-[120vh] overflow-auto scroll-smooth">
        <NavBar />
        <div>
          <HeroWrapper />
        </div>
        <div>
          <FloatingHero />
        </div>
      </div>
    </>
  );
}

export default App;
