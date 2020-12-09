import className from "classnames";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import SmallDivider2 from "./SmallDivider2";
import CuratareEnergetica from "./CuratareEnergetica";

function Mediwiki() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [progEntered, setProgEntered] = useState(false);
  const [moreEntered, setMoreEntered] = useState(false);
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
              <img className={className("", { "translate-image-r": scrollPosition > 200 })} src={size.width > 1300 ? "TH-1.jpg" : "TH-2.jpg"} alt="meditation" />
            </div>
            <div className={className("medi-info", { "translate-text": scrollPosition > 200 })}>
              <h1>Ce este ThetaHealing?</h1>
              <p>
                Cu ThetaHealing®, una dintre cele mai puternice tehnici de reprogramare a subconstientului, poti schimba convingerile limitative in <strong>posibilitati infinite!</strong>
              </p>
              <p>
                Tot ceea ce crezi despre lumea interioara sau exterioara <strong>creaza realitatea</strong> in care traiesti in fiecare zi.
              </p>
              <p>ThetaHealing este o metoda pentru corp si minte care iti ofera posibilitatea de a:</p>
              <li>
                <span>Inlaturi programe, frici si convingeri subconstiente instantaneu si definitiv.</span>
              </li>
              <li>
                <span>Te vindeci pe plan emotional si fizic.</span>
              </li>
              <li>
                <span>Ajungi la radacina oricarei situatii si o elimini intr-un mod rapid si sigur.</span>
              </li>
              <p>
                Acceste <strong>convingeri</strong> sunt adesea înrădăcinate din copilărie, transmise pe linia genealogică sau absorbite din conștiința de grup.
              </p>
              <div className="flex-this-btn mt1">
                <button
                  className={className({ "violet-btn redu-btn-padding": (!moreEntered && !progEntered) || progEntered }, { "sec-violet-btn redu-btn-padding": moreEntered })}
                  onMouseEnter={() => setProgEntered(true)}
                  onMouseLeave={() => setProgEntered(false)}
                >
                  Programeaza o sesiune
                </button>
                <button
                  className={className({ "sec-violet-btn redu-btn-padding ml1": (!moreEntered && !progEntered) || progEntered }, { "violet-btn redu-btn-padding ml1": moreEntered })}
                  onMouseEnter={() => setMoreEntered(true)}
                  onMouseLeave={() => setMoreEntered(false)}
                >
                  Afla mai mult
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmallDivider2 
      header="Sunt aici să îți spun"
      text="Când începi să constientizezi și să te încrezi că ceea ce îți spune inima ta că este adevarat,
      atunci ai intrat în legătură directă cu adâncurile intuiției tale care curge prin tot corpul tău." 
      />

      <CuratareEnergetica />

      <SmallDivider2 
      header="Descoperă beneficile meditației"
      text="Știința modernă a observat că o practicare regulată a meditaţiei are efecte asupra plasticităţii creierului şi a sănătăţii. A cresterii optimismului şi a stării de bine." 
      />

      <section className="main">
        <div className="call-to-action">
          <h1>Te invit să medităm înpreună!</h1>
          <p>Meditația reduce starea de stres și anxietate, întărește sistemul imunitar, îmbunătățește capacitatea de concentrare și ajută la creșterea nivelului de energie.</p>
          <p></p>
          <button className="violet-btn">Rezervă locul acum</button>
        </div>
        <div className="img-div">
          <img className="main-img" src="heroimage2.png" alt="hero" onMouseOver={changeDiamond} onMouseLeave={returnDiamond} />
          <img className={className("crystal-img", { "rotate-diamond": isMouseOver })} src={isMouseOver ? "diamond2.png" : "diamond1.png"} alt="crystal" />
        </div>
      </section>

      {/* <section className="sec-wiki">
        <div className="mediwiki">
          <div className="meditation-wiki-reverse">
            <div className={className("medi-info medi-info-l", { "translate-text": scrollPosition > 2300 })}>
              <h1>Haide să medităm împreună</h1>
              <p>
                În est meditația se folosea de mii de ani cu scopul de a ajunge la <strong>alte niveluri de conştiinţă</strong>.
              </p>
              <p>
                Știința modernă a observat că o practicare regulată a meditaţiei are efecte asupra <strong>plasticităţii creierului</strong> şi a sănătăţii. A cresterii optimismului şi a stării de bine.
              </p>
              <p>
                Ajuta la dezvoltarea unor relații sociale pozitive deoarece nu vei mai fi mereu stresat și usor iritabil. Te vei trasnforma într-o persoana <strong>împăcată cu sine</strong> și încrezătoare în tot ceea ce face.
              </p>
              <p>
                Te astept la medidate. Este <strong>gratuit</strong>.
              </p>
              <button className="violet-btn">Mă înscriu!</button>
            </div>
            <div className="wiki-image-parent">
              <img className={className("", { "translate-image-r": scrollPosition > 2300 && size.width > 914 })} src="MeditatieS2.jpg" alt="meditation" />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="third-wiki">
    <div className="mediwiki">
        <div className="meditation-wiki">
          <div className="wiki-image-parent">
            <img className={className("", { "translate-image-l": scrollPosition > 1800 && size.width > 914 })} src="mindfulness1.jpg" alt="meditation" />
          </div>
          <div className={className("medi-info", { "translate-text": scrollPosition > 1800 && size.width > 914 })}>
            <h1>Meditația 🧘</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
            <p>
              {" "}
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
              The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
}

export default Mediwiki;
