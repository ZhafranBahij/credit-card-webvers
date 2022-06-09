import "../App.css";
import React, { useEffect, useState } from "react";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";

export default function App() {
  return (
    <Template>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl font-title">
          <span className="block xl:inline text-white ">
            Credit Card Labeling
          </span>{" "}
          <br />
        </h1>
        <p className="mt-3 text-base text-white text-opacity-50 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Do a customer segmentation to define marketing strategy from an usage
          behavior of credit card.
        </p>
        <Thelink link="/about" name="What is it?" />
      </div>
    </Template>
  );
}
