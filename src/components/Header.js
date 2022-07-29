import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownContact from "./Dropdown";
import pdf from "../assets/doc/CV_Priscillia Gonçalves.pdf";
import icon from "../assets/img/icon.png";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleIsOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeSideBar = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="flex items-center justify-between py-4 pl-4 bg-gray-800 text-white ">
      <a href="/" className="ml-6  h-20 w-20">
        <img src={icon} alt="" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mr-7">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => handleIsOpen((prev) => !prev)}
          >
            <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
            <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
            <span className="block h-2 rounded w-11 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 h-screen"
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
                  Présentation
                </Link>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
                <Link to="/my-creations" onClick={closeSideBar}>
                  Réalisations
                </Link>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
                <Link to="/competences" onClick={closeSideBar}>
                  Compétences
                </Link>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
                <a onClick={closeSideBar} href={pdf} download>
                  Télécharger mon cv
                </a>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
                <a
                  onClick={closeSideBar}
                  href="mailto:priscillia.g.pro@outlook.fr"
                >
                  Envoyer un Email
                </a>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 uppercase">
                <a onClick={closeSideBar} href="tel:0672114122">
                  Appelez moi 😃
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-5 ">
          <li>
            <Link to="/home">Présentation</Link>
          </li>
          <li>
            <Link to="/my-creations">Réalisations</Link>
          </li>
          <li>
            <Link to="/competences">Compétences</Link>
          </li>
          <li>
            <DropdownContact />
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        
        top: 0;
        left: 0;
        background: white;
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Header;
