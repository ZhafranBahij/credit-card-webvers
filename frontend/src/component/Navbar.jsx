import "../App.css";
import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import Zero2 from "../img/Zero3.svg";

/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  VariableIcon,
} from "@heroicons/react/outline";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="text-white h-5 w-5 " />,
  },
  {
    name: "About",
    href: "/about",
    icon: <QuestionMarkCircleIcon className="text-white h-5 w-5" />,
  },
  {
    name: "Our Team",
    href: "/our",
    icon: <UserGroupIcon className="text-white h-5 w-5" />,
  },
  {
    name: "Prediction",
    href: "/predict",
    icon: <VariableIcon className="text-white h-5 w-5" />,
  },
];

function App() {
  return (
    <>
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    alt="Workflow"
                    className="h-8 w-auto sm:h-10"
                    src={Zero2}
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white  border-b-4 "
                      : " text-white  text-opacity-50 hover:text-opacity-80"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <nav className="fixed bottom-0 bg-zinc-900 w-full  sm:hidden z-40">
          <div className="flex justify-evenly space-x-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-zinc-900 bg-white flex flex-col px-3 py-2 rounded-md text-base font-medium justify-items-center"
                    : "text-white flex flex-col px-3 py-2 rounded-md text-base font-medium justify-items-center"
                }
              >
                <div className="flex justify-center mb-0.5">{item.icon}</div>
                <div className="flex justify-center text-xs ">{item.name}</div>
              </NavLink>
            ))}
          </div>
        </nav>
      </Popover>
    </>
  );
}

export default App;
