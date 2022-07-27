// Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component
import Footer from "./components/Footer";
import Header from "./components/Header";
// Pages
import "./App.css";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Realisation from "./pages/Realisation";
import Competences from "./pages/Competences";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
      {/* Ternaire qui permet de ne pas afficher le header et le footer sur la page d'accueil */}
      {window.location.pathname !== "/" ? <Header /> : null}
      {/* <Header /> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/my-creations" element={<Realisation />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      {window.location.pathname !== "/" ? <Footer /> : null}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
