import className from "classnames";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
// import SmallDivider2 from "./SmallDivider2";
import CuratareEnergetica from "./CuratareEnergetica";
import Cursuri from "./Cursuri";
import { Link } from "react-router-dom";

function Mediwiki() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const size = useWindowSize();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  function changeDiamond() {
    setIsMouseOver(true);
  }

  function returnDiamond() {
    setIsMouseOver(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="first-wiki">
        <div className="mediwiki">
          <div className="meditation-wiki-row-reverse">
            <div className="wiki-image-parent">
              <img className={className("theta-img", { "translate-image-r": scrollPosition > 200 })} src={size.width > 1300 ? "TH-1.jpg" : "TH-2.jpg"} alt="meditation" />
            </div>
            <div className={className("medi-info", { "translate-text": scrollPosition > 200 })}>
              <h1>Ce este ThetaHealing?</h1>
              <p>Cu ThetaHealing®, una dintre cele mai puternice tehnici de reprogramare a subconștientului, poți schimba convingerile limitative în posibilități infinite!</p>
              <p>Tot ceea ce crezi despre lumea interioară sau exterioară crează realitatea în care traiești în fiecare zi.</p>
              <p>ThetaHealing este o metodă pentru corp și minte care îți oferă posibilitatea de a:</p>
              <li>
                <span>Înlătura programe, frici și convingeri subconștiente instantaneu și definitiv.</span>
              </li>
              <li>
                <span>Te vindeci pe plan emoțional și fizic.</span>
              </li>
              <li>
                <span>Ajungi la rădăcina oricărei situații și o elimini într-un mod rapid și sigur.</span>
              </li>
              <p>Aceste convingeri sunt adesea înrădăcinate din copilărie, transmise pe linia genealogică sau absorbite din conștiința de grup.</p>
              <div className="flex-this-btn mt2">
                <button className="violet-btn full-padding">Programează o sesiune</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cursuri />
      <CuratareEnergetica />

      {/* <SmallDivider2
        header="Sunt aici să îți spun"
        text="Când începi să constientizezi și să te încrezi că ceea ce îți spune inima ta că este adevarat,
      atunci ai intrat în legătură directă cu adâncurile intuiției tale care curge prin tot corpul tău."
      /> */}

      <section className="main">
        <div className="call-to-action">
          <h1>Te invit să medităm împreună!</h1>
          <p>Meditația reduce starea de stres și anxietate, întărește sistemul imunitar, îmbunătățește capacitatea de concentrare și ajută la creșterea nivelului de energie.</p>
          <p></p>
          <button className="violet-btn"><Link className="footer-contact-link" to="/Medidate">Rezervă locul acum</Link></button>
        </div>
        <div className="img-div">
          <img className="main-img" src="heroimage2.png" alt="hero" onMouseOver={changeDiamond} onMouseLeave={returnDiamond} />
          <img className={className("crystal-img", { "rotate-diamond": isMouseOver })} src={isMouseOver ? "diamond2.png" : "diamond1.png"} alt="crystal" />
        </div>
      </section>
    </>
  );
}

export default Mediwiki;
