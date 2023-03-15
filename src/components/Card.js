import React from "react";

const Card = (props) => {
  const {
    images,
    text,
    text1,
    text2,
    text3,
    li1,
    li2,
    li3,
    titleh3,
    titleh5,
    redirectLink,
    titleRedirect,
    iconRedirect,
    classNameRedirect,
    siteWebLink2,
    classNameWebSite,
    siteWeb2,
    classNameImg,
  } = props;

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
        <img className={classNameImg} src={images} alt="" />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
            {titleh5}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {text} <br /> {text1}
          </p>
          <p className="text-gray-900 text-lg font-medium mb-2">{text2}</p>

          <ol className="text-gray-700 text-base mb-4 ">
            <li className="list-disc"> {li1} </li> <br />
            <li className="list-disc">{li2}</li>
            <br />
            <li className="list-disc">{li3}</li>
          </ol>
          <h3 className="text-gray-900 text-lg font-medium mb-2">{titleh3}</h3>
          <p className="text-gray-700 text-base pb-4 border-b-2">{text3}</p>
          <div className="flex flex-row justify-center space-x-14 pt-5">
            <a
              href={redirectLink}
              className={classNameRedirect}
              target="_blank"
              rel="noreferrer"
            >
              <i className={iconRedirect}></i>
              <p className="text-center text-sm"> {titleRedirect} </p>
            </a>

            <a
              href={siteWebLink2}
              className={classNameWebSite}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-internet-explorer flex justify-center "></i>
              <p className="text-center text-sm">{siteWeb2}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
