import React from "react";
import Board from "../Board";
import Circle3 from "../icons/Circle3";

type Props = {};
const BannerSection = (props: Props) => {
  return (
    <div className="bg-[#855AFF] mt-12 pb-20 pt-32 relative 3xl:pt-40">
      <Circle3 />
      
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center gap-40">
        <div className="space-y-7 mx-8 sm:mx-8 md:mx-6 lg:mx-6 xl:mx-0 3xl:mx-0">
          <h4 className="max-w-96 font-semibold text-5xl text-white 3xl:text-7xl 3xl:max-w-[600px]">
            Join 10,000+ designers, founders and makers.
          </h4>
          <p className="text-white max-w-96 text-base 3xl:text-2xl 3xl:max-w-[570px] 3xl:leading-9">
            Design should always serve your business growth. The perfect
            on-boarding journey, the best converting landing page, the stickiest
            dashboard, the jaw-dropping logo, the ultimate personas research -
            UX, UI and Product Growth go together.
          </p>
        </div>
        <Board />
      </div>
    </div>
  );
};

export default BannerSection;
