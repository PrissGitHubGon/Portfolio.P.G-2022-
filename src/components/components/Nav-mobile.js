import React, { useState } from "react";
import { Translate, setActiveLanguage } from "react-localize-alias";
import { Link } from "react-router-dom";
import pdf from "../../assets/doc/CV_Priscillia Gonçalves.pdf";

const NavMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleIsOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeSideBar = () => {
    setIsNavOpen(false);
  };
  const changeLanguagesFr = () => {
    setIsNavOpen(false);
    setActiveLanguage("fr");
  };
  const changeLanguagesEn = () => {
    setIsNavOpen(false);
    setActiveLanguage("en");
  };
  return (
    <section className="MOBILE-MENU flex lg:hidden mr-7 ">
      <div
        className="HAMBURGER-ICON space-y-2 cursor-pointer"
        onClick={() => handleIsOpen((prev) => !prev)}
      >
        <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
        <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
        <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
      </div>

      <div className={isNavOpen ? "showMenuNav " : "hideMenuNav "}>
        <div
          className="absolute top-0 right-0 px-8 py-8 h-screen "
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-fuchsia-900  sm:text-fuchsia-500 sm:hover:text-fuchsia-700 cursor-pointer "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[300px] text-black ">
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <Link to="/home" onClick={closeSideBar}>
              <Translate id="Presentation" />
            </Link>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <Link to="/projets-formation" onClick={closeSideBar}>
              <Translate id="ProjetsFormation" />
            </Link>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <Link to="/projets-personnel" onClick={closeSideBar}>
              <Translate id="ProjetsPersonnels" />
            </Link>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <Link to="/experience-professionnel" onClick={closeSideBar}>
              <Translate id="ExperienceProfessional" />
            </Link>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <Link to="/competences" onClick={closeSideBar}>
              <Translate id="Competences" />
            </Link>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <a onClick={closeSideBar} href={pdf} download>
              <Translate id="DownloadCv" />
            </a>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <a onClick={closeSideBar} href="mailto:priscillia.g.pro@outlook.fr">
              <Translate id="Email" />
            </a>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <a onClick={closeSideBar} href="tel:0672114122">
              <Translate id="Call" /> 😃
            </a>
          </li>
          <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
            <button className="uppercase" onClick={changeLanguagesFr}>
              <Translate id="French" />
            </button>{" "}
            /{" "}
            <button className="uppercase" onClick={changeLanguagesEn}>
              <Translate id="English" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default NavMobile;
