import "../App.css";
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Thelink(props) {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <Link
          to="/predict"
          className="hover:animate-pulse  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-black hover:bg-zinc-200 hover:text-zinc-900 md:py-4 md:text-lg md:px-10"
        >
          PREDICT NOW
        </Link>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <Link
          to={props.link}
          className="hover:animate-pulse w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-zinc-700 text-zinc-200 hover:bg-zinc-500 hover:text-zinc-100 md:py-4 md:text-lg md:px-10"
        >
          {props.name}
        </Link>
      </div>
    </div>
  );
}
