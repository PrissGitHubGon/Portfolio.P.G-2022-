// import { useState } from "react";
import { Translate } from "react-localize-alias";
import { Link } from "react-router-dom";
import DropdownContact from "./Dropdown";
import { setActiveLanguage } from "react-localize-alias";
import pdf from "../../assets/doc/cv-2023_Priscillia_Goncalves_dev_Front_React.pdf";

const NavDesktop = () => {
  // const changeLanguage = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-5 ">
      <li>
        <Link to="/home">
          {" "}
          <Translate id="Presentation" />
        </Link>
      </li>
      <li>
        <DropdownContact
          titleHeader="Realisations"
          titleLink1="ProjetsFormation"
          link1="projets-formation"
          titleLink2="ProjetsPersonnels"
          link2="projets-personnel"
          titleLink3="ExperienceProfessional"
          link3="experience-professionnel"
        />
      </li>
      <li>
        <Link to="/competences">
          <Translate id="Competences" />
        </Link>
      </li>
      <li>
        <DropdownContact
          titleHeader="ContactMe"
          link1="mailto:priscillia.g.pro@outlook.fr"
          titleLink1="Email"
          link2="tel:0672114122"
          titleLink2="Call"
        />
      </li>
      <li>
        <a href={pdf} download className="flex">
          <p className="mr-5">
            {" "}
            <Translate id="DownloadCv" />
          </p>{" "}
          <i className="fa-solid fa-file-lines pt-1"></i>
        </a>
      </li>{" "}
      <li>
        <button className="" onClick={() => setActiveLanguage("fr")}>
          FR
        </button>
        <span></span> | <span></span>
        <button className="" onClick={() => setActiveLanguage("en")}>
          EN
        </button>
      </li>{" "}
    </ul>
  );
};
export default NavDesktop;
