import React from "react";

const Portfolio = () => {
  return (
    <div className="flex justify-center sm:pb-80 md:mt-10">
      <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://res.cloudinary.com/dl6flp50k/image/upload/v1660153028/portfolio_oyt4tq.jpg"
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-4xl font-medium mb-4 text-center">
            Portfolio
          </h5>
          <p className="text-gray-700 text-base mb-4">Ma première création…</p>
          <p className="text-gray-700 text-base mb-4">
            J'ai mis beaucoup de temps à m'y mettre. Un coup, je voulais un site
            en une page, puis non... tel ou telle couleur… le logo que je
            mettrais était un grand mystère, ECTS… 🙄
          </p>

          <p className="text-gray-700 text-base mb-4">
            Mais, je me suis enfin lancé… Et les idées sont venues au fur et à
            mesure. Je ne suis pas designer et ça se voit ! Néanmoins, je reste
            fière de mon premier bébé 🤩.
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Pour réaliser mon portfolio, je me suis servi de :
          </h3>
          <ol className="text-gray-700 text-base mb-4 ml-4">
            <li className="list-disc"> React.js (bien sûr 😁)</li> <br />
            <li className="list-disc">
              J'ai découvert et appris à utiliser Tailwind Css
            </li>
            <br />
            <li className="list-disc">Yarn </li>
            <br />
            <li className="list-disc">Font Awesome </li>
            <br />
            <li className="list-disc">
              L'extension chrome "Responsive Viewer", pour vérifier
              l'adaptabilité du portfolio sur tout écran.
            </li>
          </ol>
          <div className="flex flex-row justify-center space-x-14 pt-5">
            <a
              href="https://github.com/PrissGitHubGon/Portfolio.P.G-2022-"
              className="text-white-800 text-2xl md:text-4xl"
            >
              <i className="fa-brands fa-github ml-3 md:ml-1 "></i>
              <p className="text-center text-sm">GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
