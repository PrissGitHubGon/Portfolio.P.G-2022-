import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleIsOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeSideBar = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="flex items-center justify-between py-6 pl-4 bg-gray-800 text-white ">
      <a href="/" className="ml-6 pt-3 uppercase text-md">
        <span>P . G</span>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mr-7">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => handleIsOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-black ">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/home" onClick={closeSideBar}>
                  Présentation
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/my-creations" onClick={closeSideBar}>
                  Réalisations
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/competences" onClick={closeSideBar}>
                  Compétences
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/contact" onClick={closeSideBar}>
                  Me contacter
                </Link>
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
            <Link to="/contact">Me contacter</Link>
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
        height: 100vh;
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
