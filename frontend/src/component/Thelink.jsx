import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import { Link } from "react-router-dom";

// for animation
import { gsap } from "gsap";

export default function Thelink(props) {
  // store a reference to the box div
  const predictRef = useRef();
  const buttonRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(predictRef.current, { opacity: 0.2, scale: 0.5 });
    gsap.to(predictRef.current, {
      duration: 1,
      opacity: 1,
      scale: 1,
    });
    gsap.from(buttonRef.current, { opacity: 0.2, scale: 0.5 });
    gsap.to(buttonRef.current, {
      duration: 1,
      opacity: 1,
      scale: 1,
    });
  });
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <Link
          to="/predict"
          className="hover:animate-pulse  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-black hover:bg-zinc-200 hover:text-zinc-900 md:py-4 md:text-lg md:px-10"
          ref={predictRef}
        >
          PREDICT NOW
        </Link>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <Link
          to={props.link}
          className="hover:animate-pulse w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-zinc-700 text-zinc-200 hover:bg-zinc-500 hover:text-zinc-100 md:py-4 md:text-lg md:px-10"
          ref={buttonRef}
        >
          {props.name}
        </Link>
      </div>
    </div>
  );
}
