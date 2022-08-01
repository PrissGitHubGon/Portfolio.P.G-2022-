import React from "react";
import Iframe from "react-iframe";
function Vinted() {
  return (
    <a href="/projets-formation" className="cursor-pointer">
      {" "}
      <div className="w-full md:w-full lg:w-full flex justify-center sm:pb-80 ">
        <Iframe
          url="https://embed.lottiefiles.com/animation/93663"
          id="myId"
          className="lottie"
          display="initial"
          position="relative"
        />
      </div>
    </a>
  );
}

export default Vinted;
