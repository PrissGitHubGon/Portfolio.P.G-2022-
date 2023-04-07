import React from "react";
import Card from "../../../components/components/Card";
import DirectionalArrow from "../../../components/components/Directional_arrow";

const Deliveroo = () => {
  return (
    <div href="/projets-formation" className="cursor-pointer">
      <div className="w-full md:w-full lg:w-full flex justify-center  sm:pb-80 md:mt-10 ">
        <Card
          images="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"
          titleh5="Deliveroo"
          text="Deliveroo_text"
          text2="Deliveroo_text2"
          text3="Deliveroo_text3"
          li1="Deliveroo_li1"
          li2="Deliveroo_li2"
          li3="Deliveroo_li3"
          titleh3="Deliveroo_titleh3"
          titleRedirect="GitHub"
          iconRedirect="fa-brands fa-github ml-3 md:ml-1 "
          redirectLink="https://github.com/PrissGitHubGon/deliveroo-front-end"
          /*className component*/
          classNameImg="  w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          classNameRedirect="text-white-800 text-2xl md:text-4xl"
          classNameWebSite="hidden"
          classNameLi3="list-disc"
        />
      </div>
      <DirectionalArrow rightLink="/vinted" rightTitle="Vinted" />
    </div>
  );
};

export default Deliveroo;
