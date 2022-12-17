import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="bg-[url('/images/bg1.jpg')] " id="product">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="">
          <div className="text-white text-6xl sm:pt-60 pt-20 md:pt-48 text-center">
            All in one
          </div>
          <div className="text-white text-6xl text-center">place</div>
          <div className="text-white mt-10 sm:text-xl sm:ml-8 mx-5 text-lg md:mb-20">
            <li>Access all your DAOs at one place</li>
            <li>Chat with fellow DAO members</li>
            <li>Create posts in forums & discuss zones</li>
            <li>Vote on RFP (request for proposals)</li>
            <li>Vote on snapshots</li>
            <li>And, much more</li>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/screen_img.svg"
            height="200"
            width="650"
            alt="load.."
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
