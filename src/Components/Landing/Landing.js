import React, { useEffect, useState } from "react";
import "./Landing.scss";
import { gsap } from "gsap";
import { SliderEffect } from "../SliderEffect2";

export const Landing = ({ item, animals }) => {
  const [effects, setEffects] = useState();

  useEffect(() => {
    const parent = document.querySelector(".landing");
    const images = document.querySelectorAll(".landing__image");

    if (parent && images) {
      const effects = SliderEffect({
        parent,
        images: Array.from(images),
      });
      setEffects(effects);
    }
  }, []);

  useEffect(() => {
    if (effects) {
      effects.material.uniforms.nextImage.value = effects.images[item];

      gsap.to(effects.material.uniforms.dispFactor, 1, {
        value: 1,
        ease: "Expo.easeOut",
        onComplete: () => {
          effects.material.uniforms.currentImage.value = effects.images[item];
          effects.material.uniforms.dispFactor.value = 0.0;
        },
      });
    }
  }, [item, effects]);

  return (
    <div className="landing" id="slider">
      {animals.map((animal, index) => {
        return (
          <div
            style={{ width: "100%", height: "100%" }}
            key={index}
            hidden={index !== item}
          >
            <img src={animal.url} className="landing__image" alt="Animal"></img>
            <div className="landing__details">
              <div className="landing__details__label">
                ОСНОВНІ ПРАКТИКИ
                <span className="landing__details__label-bar"></span>
              </div>
              <span
                id="title"
                className="landing__details__text_header landing__details__text-hidden"
              >
                {animal.species}
              </span>
              <div className="landing__details__label">
                ПРОПОНУЄМО
                <span className="landing__details__label-bar"></span>
              </div>
              <span
                id="age"
                className="landing__details__text landing__details__text-small"
              >
                {animal.age}
              </span>
              <div className="landing__details__label">
                {/* BIO */}
                <span className="landing__details__label-bar1"></span>
              </div>
              <span
                id="bio"
                className="landing__details__text landing__details__text-small"
              >
                {animal.bio}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
