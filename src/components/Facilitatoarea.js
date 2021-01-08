import {Link} from "react-router-dom";
export default function Facilitatoarea() {
    return (
        <>
        <section className="anxietate5">
          <div className="flex-anxi5 anxi-container">
            <div className="flex-anxi5-img-parent">
              <img src="a1-1.jpg" alt="mihaela maierean" />
            </div>

            <div className="anxi5-text">
              <p>Facilitatoare Meditație</p>
              <h2>Mihaela Maierean</h2>
              <p className="text-align-justify standard-text">
              Trainer, terapeut practicant de terapie ThetaHealing și fondatoarea Sesiunilor de Manifestare Conștientă și a Comunității Gândurilor Pozitive. 
                 Are mai bine de 5 ani de experiență în lucrul cu oamenii. Este pasionată de meditație și dezvoltare spirituală. De mai bine de un an organizează 
                 meditații ghidate online pe diferite teme. Prin terapiile pe care le face ea ajută oamenii să își identifice și să își elibereze fricile și 
                 blocajele mentale care le limitează viața de zi cu zi și să își descopere puterea personală folosind propriile lor resurse. 
              </p>
              <div className="mt35px center-on-m">
                <button className="violet-btn"><Link className="footer-contact-link" to="/About">Mai mult despre Mihaela</Link></button>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}