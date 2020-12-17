import "../sidepagecss/medidate.css";
import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";

function Medidate() {
  return (
    <>
      <div className="m-banner">
        <h1 className="m-container">Medidate</h1>
      </div>

      <section className="thp-hero ">
        <div className="medi1 m-container2">
          <div className="medi1-left">
            <h1>Vrei sa experimentezi beneficiile meditatiei?</h1>
            <p>Una dintre placerile mele este aceea de a medita iar MediDate a pornit din dorinta de a medita in grup.</p>
            <p>
              Programul iti ofera posibilitatea de a face parte dintr-un grup care se intalneste in mediul virtual pentru a medita. Scopul acestei practici este
              de a crea un spatiu in care tu sa poti sa iti linistesti mintea si in care sa iti setezi intentia de a fi centrat in momentul prezent.
            </p>
            <p>*Este GRATUIT</p>
            <div className="center">
              <button className="violet-btn mt1">Programează o ședință</button>
            </div>
          </div>
          <div className="medi1-right">
            <img src="m1.jpg" alt="mihaela maierean thetahealing" />
          </div>
        </div>
      </section>

      <div className="th-banner2 fs-b2">
        <h1 className="m-container">Benefici ale Medidatiei</h1>
      </div>

      <Footer/>
    </>
  );
}

export default Medidate;
