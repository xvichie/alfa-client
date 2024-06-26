import React from "react";

function ServicesLanding() {
  return (
    <div className="flex flex-col items-center my-4 py-16">
      <div className="wrapper flex justify-between gap-4 items-center">
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-main-blue text-left my-2">
            ყველაფერი, რაც გჭირდება
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-left mb-8 mt-2">
            ნახე ჩვენი სერვისები და აირჩიე რაც გჭირდება
          </h2>
          <h5 className="text-xl text-left">
            ჩვენ გვჯერა კარგი იდეების კარგ პროდუქტებად გადაქცევაში.
          </h5>
          <span className="text-left my-6">
            <button className="btn mr-4 bg-main-blue text-white">
              სერვისების ნახვა
            </button>
            {/* <button className="btn btn-outline">Try It Now</button> */}
          </span>
        </div>
        <div className="flex items-center w-[60%] justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/solarone-featured-01.png"}
            alt="Stats1"
            className="w-full hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesLanding;
