import React from "react";

function Card(props) {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={props.images}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
            {props.titleh5}
          </h5>
          <p className="text-gray-700 text-base mb-4">{props.text}</p>
          <p className="text-gray-900 text-lg font-medium mb-2">
            {props.text2}
          </p>

          <ol className="text-gray-700 text-base mb-4 ">
            <li className="list-disc"> {props.li1} </li> <br />
            <li className="list-disc">{props.li2}</li>
            <br />
            <li className="list-disc">{props.li3}</li>
          </ol>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            {props.titleh3}
          </h3>
          <p className="text-gray-700 text-base pb-4 border-b-2">
            {props.text3}
          </p>
          <div className="flex flex-row justify-center space-x-14 pt-5">
            <a
              href={props.gitHubLink}
              className="text-white-800 text-2xl md:text-4xl"
            >
              <i className="fa-brands fa-github ml-3 md:ml-1 "></i>
              <p className="text-center text-sm"> {props.gitHub} </p>
            </a>

            <a href={props.siteWebLink2} className={props.classNameWebSite}>
              <i className="fa-brands fa-internet-explorer ml-7 md:ml-5"></i>
              <p className="text-center text-sm">{props.siteWeb2}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
