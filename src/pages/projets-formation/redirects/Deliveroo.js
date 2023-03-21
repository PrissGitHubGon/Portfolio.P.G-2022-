import React from "react";
import Card from "../../../components/components/Card";

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
      <div className="flex justify-between">
        <a href="/vinted">
          <i className="fa-regular fa-hand-point-left text-4xl pl-5 bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700  hover:text-green-900 "></i>
          <p className="text-center pl-4 italic bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 font-bold">
            Vinted
          </p>
        </a>
      </div>
    </div>
  );
};

export default Deliveroo;
