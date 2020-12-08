import Footer from "./Footer";
import "../sidepagecss/about.css";
import { useState } from "react";
import { Zoom } from "react-slideshow-image";

function About() {
  const [switcharu, setSwitcharu] = useState(false);
  const images = ["a3-1-16-9.jpg", "a3-2-16-9.jpg", "a3-3-16-9.jpg"];

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
  return (
    <div className="about">
      <div className="about-banner">
        {/* <img src="spiral1.png" alt="3 spirals"/> */}
        <p>Cateva cuvinte despre mine</p>
      </div>

      <section className="about1">
        <div className="flex-this-a1 container">
          <div className="left-flex-a1">
            <img className={switcharu ? "img-lfa1-2" : "img-lfa1-1"} onClick={() => (switcharu ? setSwitcharu(!switcharu) : () => {})} src="a1-1.jpg" alt="mihaela maierean" />
            <img className={switcharu ? "img-lfa1-1" : "img-lfa1-2"} onClick={() => (!switcharu ? setSwitcharu(!switcharu) : () => {})} src="a1-2.jpg" alt="mihaela maierean" />
          </div>
          <div className="right-flex-a1">
            <h2>Eu sunt Mihaela Maierean</h2>
            <p>De mai bine de 5 ani sunt terapeut practicant de terapie ThetaHealing®. Am absolvit cursul de Theta: Baza, Avansat, Sapare Profunda si cursul de Spiraloterapie.</p>
            <p>
              Chiar daca am imbratisat aceasta forma de terapie cu inima deschisa, drumul nu a fost mereu unul lin iar ca intr-o spirala care se roteste fara intrerupere, am fost ghidata mereu in a ma uita tot mai mult inauntrul meu pentru a intelege
              si mai profund lectii pe care le credeam deja invatate.
            </p>
            <p>Pas cu pas am inceput sa asimilez o alta forma de cunoastere si de intelegere a mea si a Universului.</p>
            <div className="spiral-parent">
            <img className="spiral1" src="spiral1.png" alt="3 spirals"/>
            </div>
            
          </div>
        </div>
      </section>

      <p className="about-banner small-container">Astazi pun timpul si experienta mea in serviciul tau.</p>

      <section className="about2">
        <div className="flex-this-a2 container">
          <div className="left-flex-a2">
            <h3>Nasterea misiunii mele…</h3>
            <p>
              Am crescut intr-o familie normala, religioasa, care a avut un impact foarte mare asupra mea in ceea ce priveste perspectiva asupra Divinitatii. Din dorinta de a avea libertate si de a fi independenta am plecat de acasa la varsta de 18
              ani.
            </p>
            <p>Usor, Universul, mi-a pus in cale oameni care m-au facut sa ma indoiesc de vechile mele credinte legate de aproape orice si am inceput sa ma intreb daca exista o alta forma de a ma raporta la viata.
            Treptat au venit si raspunsurile iar eu mi-am deschis inima inspre a intregra o noua definitie despre tot ceea ce exista.</p>
            <p>
              In cautarea mea am descoperit tehnica ThetaHealing®. Aceasta “unealta” a aparut in viata mea la momentul potrivit, oferindu-mi posibilitatea de a rezolva orice situatie din prezent si din trecut intr-un mod rapid, eficient si definitiv.
            </p>
            <p>Am simtit nevoia inca de la inceput sa impartasesc si cu ceailalti ceea ce eu descoperisem si asa a inceput calatoria mea ca si terapeut.</p>
          </div>
          <div className="right-flex-a2">
            <img src="a2-1.jpg" alt="mihaela maierean" />
          </div>
        </div>
      </section>

      <section className="about3">
        <div className="about-banner">
          <div className="container">
            <p>Practicarea acestei terapii imi ofera posibilitatea de contribui la vindecarea si curatarea atat a ta, a mea cat si a planetei.</p>
          </div>
        </div>
        <div className="slider-parent container">
          <Slideshow />
        </div>
        <div className="about-banner3">
        <div className="container">
        <p className="about-last-p">Deci, daca si tu esti pregatit sa te uiti in interior ca sa te vindeci si sa experimentezi puterea iubirii infinite</p>
        <button className="violet-btn">Hai sa incepem</button>
        </div>
        </div>        
      </section>

      <Footer />
    </div>
  );
}

export default About;
