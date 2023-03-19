import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <main className="  ">
        <div className=" flex flex-col py-16  lg:flex-row  ">
          <div className=" lg:w-2/4  ml-22 pb-5 ">
            <img
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1659365893/portefolio/me_c0bgw0.png"
              alt=""
              className="picture "
            />
          </div>

          <div className=" lg:w-2/4 pl-3 pr-3 pb-5  2xl:w-3/4">
            <h1 className="text-xl sm:px-12  md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 ">
              <Typewriter
                options={{
                  strings: [
                    "Bonjour, Je m'appelle Priscillia Gonçalves",
                    "J'ai 32 ans.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <br />

            <p className="text-black text-base lg:px-12 sm:text-lg  md:text-2xl ">
              Amoureuse de projets créatifs (Lego,crochet, dessins, peintures
              etc...), je me suis tout naturellement tournée vers une carrière
              de Développeuse web lors de mon choix de reconversion
              professionnelle, afin de pouvoir créer des projets de A à Z.
              <br />
              <br />
              Développeuse web curieuse, j'aime les applications simples,
              rapides et efficaces.
              <br />
              <br />
              Un sens de l'écoute et du service renforcé par 15 ans d'expérience
              dans les métiers de la petite enfance, je suis motivée par le
              besoin de faire toujours mieux, d'acquérir de nouvelles
              compétences, et prends plaisir à relever de nouveaux challenges.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
