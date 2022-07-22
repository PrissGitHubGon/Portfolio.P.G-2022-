import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <main className=" w-full md:w-full lg:w-full  ">
        <div className="bg-black   w-full flex flex-col md:flex-row  ">
          <aside className="sm:ml-48 sm:w-2/4  md:w-2/3 lg:w-1/4 bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1658304658/294103591_2299089073562502_350884712205389612_n_m4y1rb.jpg')] bg-cover bg-center px-5 py-56  "></aside>{" "}
          <div className="bg-black md:w-2/3 lg:w-3/4 px-5 py-40 md:py-30">
            <h1 className="text-2xl md:text-4xl text-white ">
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

            <p className="text-white">
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
