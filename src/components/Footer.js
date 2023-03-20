import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  //   Fonction qui renvoie l'année en cours
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="text-center bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1679230930/portefolio/background-784377_960_720_svbl1v.jpg')]  bg-cover text-black">
      <div className="pt-6 md:py-10">
        <div className="flex justify-center mb-4">
          <a
            href="https://www.linkedin.com/in/priscillia-gon%C3%A7alves-098285217/"
            className="mr-9 text-white-800 text-2xl md:text-4xl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/PrissGitHubGon"
            className="text-white-800 text-2xl md:text-4xl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-white-700 py-5">
        © {getCurrentYear()} Made by :
        <Link to="text-white-800" href="">
          <span> </span> Priscillia Gonçalves
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
