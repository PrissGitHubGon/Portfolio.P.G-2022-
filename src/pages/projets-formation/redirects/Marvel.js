import React from "react";
import Card from "../../../components/components/Card";
import DirectionalArrow from "../../../components/components/Directional_arrow";

const Marvel = () => {
  return (
    <>
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 md:mt-10">
        <Card
          images="https://res.cloudinary.com/dl6flp50k/image/upload/v1659953418/gabriel-2519793_960_720_jnbquh.webp"
          titleh5="Marvel"
          text="Marvel_text"
          text2="Marvel_text2"
          li1="Marvel_li1"
          li2="Marvel_li2"
          li3="Marvel_li3"
          titleRedirect="GitHub"
          redirectLink="https://github.com/PrissGitHubGon/marvel-frontend"
          iconRedirect="fa-brands fa-github ml-3 md:ml-1 "
          siteWeb2="siteWeb2"
          siteWebLink2="https://marvel-student-lereacteur.netlify.app/"
          /*className component*/
          classNameImg=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          classNameRedirect="text-white-800 text-2xl md:text-4xl"
          classNameWebSite="text-green-800 text-2xl md:text-4xl"
          classNameLi3="list-disc"
        />
      </div>
      <DirectionalArrow
        rightLink="/projets-formation"
        rightTitle="Projets"
        leftLink="/vinted"
        leftTitle="Vinted"
      />
    </>
  );
};

export default Marvel;
