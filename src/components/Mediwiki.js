import className from "classnames";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import SmallDivider2 from "./SmallDivider2";
import CuratareEnergetica from "./CuratareEnergetica";

function Mediwiki() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const size = useWindowSize();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

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
          <div className="meditation-wiki">
            <div className="wiki-image-parent">
              <img className={className("", { "translate-image-l": scrollPosition > 200 })} src="ThetaHealingS.jpg" alt="meditation" />
            </div>
            <div className={className("medi-info", { "translate-text": scrollPosition > 200 })}>
              <h1>Ce este ThetaHealing. 🩺</h1>
              <p>
                ThetaHealing este o metodă pentru corp și minte care folosește <strong>energia</strong> curgătoare din toate lucrurile care există și produce schimbări permanente la <strong>nivel celular</strong>.
              </p>
              <p>
                Prin aceasta reușim să ne <strong>trasnformăm</strong> pe plan fizic , emoțional cât și spiritual.
              </p>
              <p>
                Propriile preconcepții despre noi înșine ne <strong>crează mediul înconjurător</strong> cât și rutinele noastre zilnice , viciile, problemele de sănătate, statusul financiar sau bunăstarea relațiilor noastre.
              </p>
              <p>
                Acceste convingeri sunt adesea <strong>înrădăcinate</strong> din copilărie, transmise pe linia genealogică sau absorbite din conștiința de grup.
              </p>
              <button className="violet-btn">Ești Gata Să Ți Le Schimbi?</button>
            </div>
          </div>
        </div>
      </section>

      <SmallDivider2 />

      <CuratareEnergetica />

      <section className="sec-wiki">
        <div className="mediwiki">
          <div className="meditation-wiki-reverse">
            <div className={className("medi-info medi-info-l", { "translate-text": scrollPosition > 2500 })}>
              <h1>Haide să medităm împreună 🧘🏻‍♂️</h1>
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
              <img className={className("", { "translate-image-r": scrollPosition > 2032 && size.width > 914 })} src="MeditatieS2.jpg" alt="meditation" />
            </div>
          </div>
        </div>
      </section>

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
