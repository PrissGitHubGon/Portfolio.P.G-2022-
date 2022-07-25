import React from "react";
import CarouselProjectPerso from "../components/Carousel-ProjectPerso";
import CarouselSchool from "../components/Carousel-School";

function Realisation() {
  return (
    <div className="md:pb-64">
      <CarouselSchool />
      <CarouselProjectPerso />
    </div>
  );
}

export default Realisation;
