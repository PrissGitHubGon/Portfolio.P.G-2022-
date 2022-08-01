import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <main className="  ">
        <div className="bg-black  flex flex-col sm:pt-10 md:flex-row  ">
          <div className=" md:w-2/4 px-20 py-5">
            <img
              src="https://res.cloudinary.com/dl6flp50k/image/upload/v1659097154/me_khe6j2.png"
              alt=""
              className="h-72 sm:h-auto   sm:px-10 md:px-0 md:ml-0 2xl:h-full 2xl:px-24 2xl:ml-28"
            />
          </div>

          <div className="bg-black md:w-2/4 pl-3 pr-3 pb-5 sm:pt-3 2xl:w-3/4">
            <h1 className="text-xl sm:px-12  md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 ">
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

            <p className="text-slate-400 text-base md:px-12 sm:text-lg  md:text-2xl ">
              Je suis anciennement diplômée d’un CAP petite enfance et d’un bep
              Vente.
              <br />
              J'ai souhaité me réorienter dans un domaine qui me plait
              davantage.
              <br />
              <br />
              Amoureuse par la réalisation d'ouvrage manuel (point de croix,
              dessins, peintures etc...), je me suis tout naturellement tournée
              vers une carrière de Développeuse web lors de mon choix de
              reconversion professionnelle, afin de pouvoir créer des projets de
              A à Z.
              <br />
              <br />
              Développeuse web curieuse, j'aime les applications simples,
              rapides et efficaces.
              <br />
              <br />
              Un sens de l'écoute et du service renforcé par 15 ans d'expérience
              à travailler dans les métiers de la petite enfance, je suis
              motivée par le besoin de faire toujours mieux, d'acquérir de
              nouvelles compétences, et prends plaisir à relever de nouveaux
              challenges.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
