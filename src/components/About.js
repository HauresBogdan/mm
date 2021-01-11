import Footer from "./Footer";
import "../sidepagecss/about.css";
import { useState } from "react";
import { Zoom } from "react-slideshow-image";
import classNames from 'classnames';
import {Link} from "react-router-dom";

function About() {
  const [switcharu, setSwitcharu] = useState(false);
  const images = ["a3-1-16-9.jpg", "a3-2-16-9.jpg", "a3-3-16-9.jpg"];

  const [hideModal,setHideModal] = useState(true);

  function toggleModal() {
    setHideModal(!hideModal);
  }

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} alt="mihaela maierean"/>
          ))}
        </Zoom>
      </div>
    );
  };

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

function openMenu() {
  setHideModal(false);
}

  return (
    <div className="about">
      <div className="about-banner">
        <p>Câteva cuvinte despre mine</p>
      </div>

      <section className="about1">
        <div className="flex-this-a1 container">
          <div className="left-flex-a1">
            <img className={switcharu ? "img-lfa1-2" : "img-lfa1-1"} onClick={() => (switcharu ? setSwitcharu(!switcharu) : () => {})} src="a1-1.jpg" alt="mihaela maierean" />
            <img className={switcharu ? "img-lfa1-1" : "img-lfa1-2"} onClick={() => (!switcharu ? setSwitcharu(!switcharu) : () => {})} src="a1-2.jpg" alt="mihaela maierean" />
          </div>
          <div className="right-flex-a1">
            <h2>Eu sunt Mihaela Maierean</h2>
            <p>De mai bine de 5 ani sunt terapeut practicant de terapie ThetaHealing®. Am absolvit cursul de Theta: Baza, Avansat, Săpare Profundă și cursul de Spiraloterapie.</p>
            <p>
              Chiar dacă am îmbrațisat această formă de terapie cu inima deschisă, drumul nu a fost mereu unul lin iar ca într-o spirală care se rotește fară întrerupere, am fost ghidată mereu în a mă uita tot mai mult înăuntrul meu pentru a înțelege
              și mai profund lecții pe care le credeam deja învățate.
            </p>
            <p>Pas cu pas am început să asimilez o altă formă de cunoaștere și de înțelegere a mea și a Universului.</p>
            <div className="spiral-parent">
            <img className="spiral1" src="spiral1.png" alt="3 spirals"/>
            </div>
            
          </div>
        </div>
      </section>

      <p className="about-banner small-container">Astăzi pun timpul și experiența mea în serviciul tău</p>

      <section className="about2">
        <div className="flex-this-a2 container">
          <div className="left-flex-a2">
            <h3>Nașterea misiunii mele…</h3>
            <p>
              Am crescut într-o familie normală, religioasă, care a avut un impact foarte mare asupra mea în ceea ce privește perspectiva asupra Divinității. Din dorința de a avea libertate și de a fi independentă am plecat de acasă la varsta de 18
              ani.
            </p>
            <p>Ușor, Universul, mi-a pus în cale oameni care m-au făcut să mă îndoiesc de vechile mele credințe legate de aproape orice și am început să mă întreb dacă există o altă formă de a mă raporta la viață.
            Treptat au venit și răspunsurile iar eu mi-am deschis inima înspre a intregra o noua definiție despre tot ceea ce există.</p>
            <p>
              În căutarea mea am descoperit tehnica ThetaHealing®. Această “unealtă” a apărut în viața mea la momentul potrivit, oferindu-mi posibilitatea de a rezolva orice situație din prezent și din trecut într-un mod rapid, eficient și definitiv.
            </p>
            <p>Am simțit nevoia încă de la început să împărtășesc și cu ceilalți ceea ce eu descoperisem și așa a început calatoria mea ca și terapeut.</p>
          </div>
          <div className="right-flex-a2">
            <img src="a2-1.jpg" alt="mihaela maierean" />
          </div>
        </div>
      </section>

      <section className="about3">
        <div className="about-banner">
          <div className="container">
            <p>Practicarea acestei terapii îmi oferă posibilitatea de a contribui la vindecarea și curățarea atât a ta, a mea cât și a planetei</p>
          </div>
        </div>
        <div className="slider-parent container">
          <Slideshow />
        </div>
        <div className="about-banner3">
        <div className="container">
        <p className="about-last-p">Deci, dacă și tu ești pregătit să te uiți în interior ca să te vindeci și să experimentezi puterea iubirii infinite</p>
        <button className="violet-btn" onClick={openMenu}>Hai să începem</button>
        </div>
        </div>        
      </section>

      <div className={classNames('mymodal-bg',{'activate': hideModal===false})}>
      <div className="mymodal">
          <p onClick={toggleModal}><Link className="footer-contact-link black-links" to="/ThetaHealing">ThetaHealing</Link></p>
          <p onClick={toggleModal}><Link className="footer-contact-link black-links" to="/Curatare">Curățare Energetică</Link></p>
          <p onClick={toggleModal}><Link className="footer-contact-link black-links" to="/Medidate">MediDate</Link></p>        
          <span className="mymodal-close" onClick={toggleModal}>X</span>
      </div>
  </div>

      <Footer />
    </div>
  );
}

export default About;
