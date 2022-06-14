import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";
import InputText from "../component/InputText";
import InputSelect from "../component/InputSelect";

// for animation
import { gsap } from "gsap";

export default function Predict() {
  const [getMessage, setGetMessage] = useState("Let's Predict");

  // store a reference
  const titleRef = useRef();
  const formRef = useRef();

  // ini data yang akan diubah di form
  const [data, setData] = useState({
    balance: 1,
    balance_frequency: 1,
    purchases: 1,
    one_off_purchases: 1,
    installment_purchases: 1,
    cash_advance: 1,
    purchases_frequency: 1,
    one_off_purchases_frequency: 1,
    purchases_installment_frq: 1,
    cash_advance_frequency: 1,
    cash_advance_trx: 1,
    purchases_trx: 1,
    credit_limit: 1,
    payments: 1,
    minimum_payments: 1,
    prc_full_payment: 1,
    tenure: 1,
  });

  const labels = [
    "balance",
    "balance_frequency",
    "purchases",
    "one_off_purchases",
    "installment_purchases",
    "cash_advance",
    "purchases_frequency",
    "one_off_purchases_frequency",
    "purchases_installment_frq",
    "cash_advance_frequency",
    "cash_advance_trx",
    "purchases_trx",
    "credit_limit",
    "payments",
    "minimum_payments",
    "prc_full_payment",
    "tenure",
  ];
  // Ini berguna untuk mendapatkan data json dari app.py yang routenya get dan method get
  useEffect(() => {
    axios
      // .get("http://localhost:5000/flask/get")
      .get("https://credit-card-gr4.herokuapp.com/flask/get")
      .then((response) => {
        console.log("SUCCESS", response);
        setGetMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(titleRef.current, { x: 100, opacity: 0.2 });
    gsap.to(titleRef.current, { duration: 1, x: 0, opacity: 1 });
    gsap.from(formRef.current, { opacity: 0.2, scale: 0.5 });
    gsap.to(formRef.current, {
      duration: 1,
      opacity: 1,
      scale: 1,
    });
  }, [titleRef, formRef]);

  // If a form was typed
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // If clicked a submit
  // Saat submit, data di post ke route predicition sesuai dengan yang di app.py method post
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      // url: "http://localhost:5000/flask/prediction",
      url: "https://credit-card-gr4.herokuapp.com/flask/prediction",
      data: data,
    })
      .then((response) => {
        console.log("SUCCESS", response);
        setGetMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(JSON.stringify(data));
  };
  return (
    <Template>
      <h1
        className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-title "
        ref={titleRef}
      >
        <span className="block xl:inline text-white">Prediction</span> <br />
      </h1>
      <form onSubmit={handleSubmit} className="mt-5" ref={formRef}>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labels.map((name) => (
            <InputText name={name} handleChange={handleChange} data={data} />
          ))}
        </div>
        <div class="flex sm:flex-row flex-col gap-4 mt-8">
          <button
            type="submit"
            className="text-black hover:text-white bg-white hover:bg-black focus:ring-4 focus:outline-none focus:ring-zinc-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            SUBMIT
          </button>
          <div
            className="w-1/2 p-4  text-sm text-white bg-zinc-700 rounded-lg "
            role="alert"
          >
            {getMessage}
          </div>
        </div>
      </form>
    </Template>
  );
}
