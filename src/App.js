import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBox from "./components/HeroBox";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBox />
      <MainContent />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
