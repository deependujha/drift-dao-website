import React from "react";
import Card from "./Card";

const About = () => {
  return (
    <div className="bg-[url('/images/bg.jpg')]">
      <div className="grid sm:grid-cols-2 gap-y-60 pt-12">
        <div className="sm:flex items-center justify-center sm:h-screen ">
          <div
            className="text-white text-6xl"
            style={{ transform: "rotate(270deg)" }}
          >
            About us
          </div>
        </div>
        <div className="">
          <div className="sm:flex items-center justify-start sm:h-screen ">
            <div className="sm:mr-10">
              <Card />
            </div>
            <div className="sm:mr-20">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
