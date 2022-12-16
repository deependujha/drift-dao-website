import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="bg-[url('/images/bg1.jpg')]">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-white text-6xl sm:pt-60 pt-20 md:pt-48">All in one</div>
          <div className="text-white text-6xl">place</div>
          <div className="text-white mt-10 sm:text-xl sm:ml-8 mx-5 text-lg md:mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. quis
            numquam tempore quia exercitationem, voluptate aperia tempora
            cupiditate adipisci temporibus ut laboriosam vitae architecto minus,
            veritatis sequi explicabo earum at nihil! corporis, aspernatur
            laborum odio soluta nulla ea libero voluptatibus voluptate possimus
            laudantium. Distinctio ipsum, quae aspernatur ad eligendi iusto
            molestias temporibus, velit voluptatum, qui ipsa explicabo
            architecto impedit. Sapiente harum cupiditate maxime doloribus quos
            quia obcaecati consectetur id cum eos, ut nam! Distinctio, deleniti
            omnis veniam, unde mollitia quasi iste, voluptates cumque adipisci
            vero esse. Ex porro distinctio vel molestias ratione perferendis.
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
