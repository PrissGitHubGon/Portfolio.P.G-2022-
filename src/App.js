// Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component
import Footer from "./components/Footer";
import Header from "./components/Header";

//**** Views
import "./App.css";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Competences from "./pages/Competences";
import Notfound from "./pages/Notfound";

//**** projets-formation
import ProjetsSchool from "./pages/projets-formation/Projets-school";
import Marvel from "./pages/projets-formation/redirects/Marvel";
import Vinted from "./pages/projets-formation/redirects/Vinted";
import Deliveroo from "./pages/projets-formation/redirects/Deliveroo";

//**** projets-personnel
import ProjetsPerso from "./pages/projets-personnel/Projets-perso";
import Portfolio from "./pages/projets-personnel/redirects/Portfolio";

//**** projets-professionnel
import ProjetsPro from "./pages/projets-professionnel/Projets-pro";

const App = () => {
  return (
    <Router>
      {/* Ternaire qui permet de ne pas afficher le header et le footer sur la page d'accueil */}
      {window.location.pathname !== "/" ? <Header /> : null}
      {/* <Header /> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/projets-formation" element={<ProjetsSchool />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/vinted" element={<Vinted />} />
        <Route path="/deliveroo" element={<Deliveroo />} />
        <Route path="/projets-personnel" element={<ProjetsPerso />} />
        <Route path="/experience-professionnel" element={<ProjetsPro />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      {window.location.pathname !== "/" ? <Footer /> : null}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
