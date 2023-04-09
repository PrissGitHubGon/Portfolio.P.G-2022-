import React from "react";
import Card from "../../../components/components/Card";
import DirectionalArrow from "../../../components/components/Directional_arrow";

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
          titleh3="wever_titleh3"
          titleRedirect="LinkedIn"
          text="wever_text"
          text1="wever_text1"
          text2="wever_text2"
          li1="wever_li1"
          li2="wever_li2"
          siteWebLink2="https://www.wever.fr/"
          siteWeb2="siteWeb2"
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

      <DirectionalArrow
        rightLink="/experience-professionnel"
        rightTitle="Projets"
        leftLink="/Dimitri-Houssin"
        leftTitle="Dimitri Houssin"
      />
    </>
  );
};

export default Wever;
