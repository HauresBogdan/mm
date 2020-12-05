import { useEffect, useState } from "react";
import classNames from "classnames";
import Mediwiki from "./Mediwiki";
import SmallDivider from "./SmallDivider";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Home() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [toggleSlide, setToggleSlide] = useState(false);

  const [count, setCount] = useState(0);

  const [stopAutoSlide, setStopAutoSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleSlide((toggleSlide) => !toggleSlide);
      setCount((count) => count + 1);
    }, 6000);

    if (stopAutoSlide === true) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stopAutoSlide]);

  function toggleSlidee() {
    setToggleSlide(!toggleSlide);
    setCount(count + 1);
    setStopAutoSlide(true);
  }

  function changeDiamond() {
    setIsMouseOver(true);
  }

  function returnDiamond() {
    setIsMouseOver(false);
  }

  return (
    <>
      <section className={classNames("main", { stanga: toggleSlide }, { dreapta: !toggleSlide && count > 0 })}>
        <div className="call-to-action">
          <h1>Descoperă beneficile meditației!</h1>
          <p>Lasăte ghidat de un terapeut cu o experiență de 5 ani în practicarea terapiei ThetaHealing și începe să trăiești viața pe care o meriți.</p>
          <p></p>
          <button className="violet-btn">Rezervă o ședința</button>
        </div>
        <div className="img-div">
          <img className="main-img" src="heroimage2.png" alt="hero" onMouseOver={changeDiamond} onMouseLeave={returnDiamond} />
          <img className={classNames("crystal-img", { "rotate-diamond": isMouseOver })} src={isMouseOver ? "diamond2.png" : "diamond1.png"} alt="crystal" />
        </div>
      </section>

      <section className={classNames("sliding-main", { stanga: toggleSlide }, { dreapta: !toggleSlide && count > 0 })}>
        <div className="sliding-img-parent">
          <div className="sliding-img">
            <img src="1.jpg" alt="thetahealing" />
            <div className="mask"></div>
            <p>SCHIMBĂ-ȚI CONVINGERILE LIMITATIVE DIN SUBCONSTIENT ÎN POSIBILITĂȚI INFINITE!</p>
          </div>
        </div>
      </section>

      <div className="slider-dots">
        <ul>
          <li className={!toggleSlide ? "filled-dot" : "hallow-dot"} onClick={toggleSlide ? toggleSlidee : () => {}}></li>
          <li></li>
          <li className={toggleSlide ? "filled-dot" : "hallow-dot"} onClick={!toggleSlide ? toggleSlidee : () => {}}></li>
        </ul>
      </div>
      <SmallDivider />
      <Mediwiki />
      <Testimonials />
      <Footer/>
    </>
  );
}

export default Home;
