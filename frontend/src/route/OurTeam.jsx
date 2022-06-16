import logo from "../logo.svg";
import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";

// for animation
import { gsap } from "gsap";

export default function Our() {
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
          className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-title"
          ref={titleRef}
        >
          <span className="block xl:inline text-white">
            Member of Group 2 :
          </span>{" "}
          <br />
        </h1>
        <h2
          className="text-xl tracking-tight text-gray-900 sm:text-2xl md:text-4xl  mt-2"
          ref={descRef}
        >
          <span className="block xl:inline text-white text-opacity-60">
            1. Aditya Gumilar
          </span>{" "}
          <br />
          <span className="block xl:inline text-white text-opacity-60">
            2. Nuur Ainii Kartika Putri
          </span>{" "}
          <br />
          <span className="block xl:inline text-white text-opacity-60">
            3. M. Zhafran Bahij
          </span>{" "}
          <br />
        </h2>
        <Thelink link="/" name="Back to home" />
      </div>
    </Template>
  );
}
