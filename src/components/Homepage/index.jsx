import React from "react";
import ActiveSlider from "./ActiveSlider";
import Image from "next/image";
import mobil from "../../../public/assets/mobil.jpg";

function Homepage() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-y-4">
      <div className="max-w-[700px] h-[300px] flex justify-center items-center">
        <ActiveSlider />
      </div>
      <div className="w-[700px] h-[130px] grid grid-cols-3 gap-3">
        <div className="h-full w-full "><Image src={mobil}/></div>
        <div className="h-full w-full "><Image src={mobil}/></div>
        <div className="h-full w-full "><Image src={mobil}/></div>
      </div>
    </div>
  );
}

export default Homepage;