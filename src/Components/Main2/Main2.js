import React, { useState } from "react";
import "./Main.scss";
import { Slider2 } from "../Slider/Slider2.js";
import { Landing2 } from "../Landing/Landing2.js";
import NavBar from "../NavBar.js";
import Leopard from "../images/Leopard1.png";

function Main() {
  const [item, setItem] = useState(0);

  const list = [
    {
      species: "Реєстрація  та супроводження бізнесу",
      age: "підбір оптимальної  юридичної форми для вашої бізнес-ідеї  та супровід державної реєстрації суб’єкта господарювання",
      // bio: "Love snacks",
      url: Leopard,
    },
    {
      species: "Договірне право",
      age: "допоможемо у розробці контактів  якк для стпартапів, так і  для окремих  проектів Вашого бізнесу",
      // bio: "Love shrimps",
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/lion2.jpg",
    },
    {
      species: "Документи для Вашого сайту",
      age: "підготовка  необхідного  спектру документів  саме для  роботи Вашого сайту",
      // bio: "Hate Elefants",
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/tiger2.jpg",
    },
    {
      species: "Захист права інтелектуальної власності  та ділової репутації",
      age: "увесь спектр послуг у сфері захисту інтелектуальної власності (патентів, ТМ, авторського права, комерційної таємниці), так і в сфері захисту честі, гідності та ділової репутації наших клієнтів, включно зі стягненням  відповідної компенсації",
      // bio: "Love salmon",
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/bear2.jpg",
    },
    {
      species: "Податки",
      age: "послуги щодо вибору оптимальної податкової юрисдикції саме для вашого бізнесу, податкове планування, міжнародне оподаткування та трансфертне оподаткування",
      // bio: "Love salmon",
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/bear2.jpg",
    },
  ];

  return (
    <div className="Main">
      <NavBar />
      <Landing2 animals={list} item={item}></Landing2>
      <Slider2 onItem={(index) => setItem(index)} size={list.length}></Slider2>
    </div>
  );
}

export default Main;
