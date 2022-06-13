import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";

// for animation
import { gsap } from "gsap";

export default function App() {
  // store a reference to the box div
  const titleRef = useRef();
  const descRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(titleRef.current, { x: 100, opacity: 0.2 });
    gsap.to(titleRef.current, { duration: 1, x: 0, opacity: 1 });
    gsap.from(descRef.current, { x: -100, opacity: 0.2 });
    gsap.to(descRef.current, { duration: 1, x: 0, opacity: 1 });
  });

  return (
    <Template>
      <div className="sm:text-center lg:text-left">
        <h1
          className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl font-title"
          ref={titleRef}
        >
          <span className="block xl:inline text-white ">
            Credit Card Labeling
          </span>{" "}
          <br />
        </h1>
        <p
          className="mt-3 text-base text-white text-opacity-50 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          ref={descRef}
        >
          Do a customer segmentation to define marketing strategy from an usage
          behavior of credit card.
        </p>
        <Thelink link="/about" name="What is it?" />
      </div>
    </Template>
  );
}
