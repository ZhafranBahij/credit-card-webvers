import logo from "../logo.svg";
import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";

export default function Our() {
  return (
    <Template>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-title">
          <span className="block xl:inline text-white">
            Member of Group 4 :
          </span>{" "}
          <br />
        </h1>
        <h2 className="text-xl tracking-tight text-gray-900 sm:text-2xl md:text-4xl  ">
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
