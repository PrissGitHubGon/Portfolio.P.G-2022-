import React from "react";
import Card from "../../../components/components/Card";

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
      <div className="flex justify-between">
        <a href="/projets-formation">
          <i className="fa-regular fa-hand-point-left text-4xl pl-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
            Projets
          </p>
        </a>
        <a href="/vinted">
          <i className="fa-regular fa-hand-point-right text-4xl pr-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pr-6 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold ">
            Vinted
          </p>
        </a>
      </div>
    </>
  );
};

export default Marvel;
