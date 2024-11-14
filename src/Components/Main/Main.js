import React, { useState } from "react";
import "./Main.scss";
import { Slider } from "../Slider/Slider.js";
import { Landing } from "../Landing/Landing.js";

import Leopard from "../images/Leopard14.png";
import Lion from "../images/Lion13.png";
import Tiger from "../images/Tiger13.png";
import Bear from "../images/Bear13.png";
import Bear2 from "../images/Bear13.png";

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
      url: Lion,
    },
    {
      species: "Документи для Вашого сайту",
      age: "підготовка  необхідного  спектру документів  саме для  роботи Вашого сайту",
      // bio: "Hate Elefants",
      url: Tiger,
    },
    {
      species: "Захист права інтелектуальної власності  та ділової репутації",
      age: "увесь спектр послуг у сфері захисту інтелектуальної власності (патентів, ТМ, авторського права, комерційної таємниці), так і в сфері захисту честі, гідності та ділової репутації наших клієнтів, включно зі стягненням  відповідної компенсації",
      // bio: "Love salmon",
      url: Bear,
    },
    {
      species: "Податки",
      age: "послуги щодо вибору оптимальної податкової юрисдикції саме для вашого бізнесу, податкове планування, міжнародне оподаткування та трансфертне оподаткування",
      // bio: "Love salmon",
      url: Bear2,
    },
  ];

  return (
    <div className="Main">
      <Landing animals={list} item={item}></Landing>
      <Slider onItem={(index) => setItem(index)} size={list.length}></Slider>
    </div>
  );
}

export default Main;
