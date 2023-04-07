// Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initLocalize } from "react-localize-alias";

import translations from "./Translate";

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
import Wever from "./pages/projets-professionnel/redirects/wever";

const App = () => {
  // LocalStorage

  const languageForStorage = initLocalize;
  // setter
  localStorage.setItem("my-key", languageForStorage);
  // // getter
  // const languageFromStorage = localStorage.getItem("my-key");

  // Traductions
  useEffect(() => {
    initLocalize({
      languages: [
        { code: "en", name: "English" },
        { code: "fr", name: "French" },
      ],
      translations,
      options: {
        defaultLanguage: "fr",

        onMissing: (data) => console.log("data language =========>", data),

        onAlias: (alias) => alias,
      },
    });
  }, []);
  return (
    <Router>
      {/* Ternaire qui permet de ne pas afficher le header et le footer sur la page d'accueil */}
      {window.location.pathname !== "/" ? <Header /> : null}

      <Routes>
        {/* views */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/competences" element={<Competences />} />
        {/* formations */}
        <Route path="/projets-formation" element={<ProjetsSchool />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/vinted" element={<Vinted />} />
        <Route path="/deliveroo" element={<Deliveroo />} />
        {/* personnel */}
        <Route path="/projets-personnel" element={<ProjetsPerso />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* professionnel */}
        <Route path="/experience-professionnel" element={<ProjetsPro />} />
        <Route path="/wever" element={<Wever />} />
      </Routes>

      {window.location.pathname !== "/" ? <Footer /> : null}
    </Router>
  );
};

export default App;
