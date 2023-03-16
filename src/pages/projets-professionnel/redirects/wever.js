import React from "react";
import Card from "../../../components/Card";

const Wever = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        <Card
          images="https://res.cloudinary.com/dl6flp50k/image/upload/v1678803375/portefolio/logo-wever-slogan_inqn0j.svg"
          imagesRecommandation="https://res.cloudinary.com/dl6flp50k/image/upload/v1678962304/portefolio/recommandation_yzgqci.jpg"
          titleCustomStart="wev"
          titleCustomMiddle="e"
          titleCustomEnd="r"
          titleh3="Recommandation :"
          titleRedirect="LinkedIn"
          text="J'ai réalisé un stage de 6 mois dans la startup wever Basé à sophia Antipolis. "
          text1="En full remote"
          text2="Lors de ce stage j'ai' :"
          li1="Refait “from scratch” leur application utilisateur v1 pour une montée en version des composants et aussi la passer en TypeScript"
          li2="Ajouté de nouveaux composants"
          siteWebLink2="https://www.wever.fr/"
          siteWeb2="Site web"
          redirectLink="https://www.linkedin.com/company/yeswever/mycompany/"
          iconRedirect="fa-brands fa-linkedin flex justify-center"
          /*className component*/
          classNameImg=" w-full h-96 md:h-auto object-contain md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          classNameWebSite="text-green-800 text-2xl md:text-4xl "
          classNameRedirect="text-sky-800 text-2xl md:text-4xl"
          classNameTitleCustomMiddle="text-rose-500"
          classNameTitleCustomStartEnd="text-cyan-500 text-4xl font-medium mb-4 text-center"
        />
      </div>

      {/* /******************************************  */}
      <div className="flex justify-between">
        <a href="/experience-professionnel">
          <i className="fa-regular fa-hand-point-left text-4xl pl-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
            Projets
          </p>
        </a>
        {/* <a href="/vinted">
          <i className="fa-regular fa-hand-point-right text-4xl pr-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pr-6 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold ">
            Vinted
          </p>
        </a> */}
      </div>
    </>
  );
};

export default Wever;
