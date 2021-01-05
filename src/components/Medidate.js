import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/curatare.css";
// import PriceCard from "./PriceCard";

function Medidate() {
  return (
    <>
      <section className="th-sec">
        <div className="th-banner">
          <h1 className="th-container">Medidate</h1>
        </div>
        <section className="thp-hero">
          <div className="c-main1 ">
            <div className="cmain1">
              <img className="icon2" src="medi1.png" alt="gld" />
              <h2>Vrei să experimentezi beneficiile meditației?</h2>
              <div className="c-container">
                {/* <p>Una dintre plăcerile mele este aceea de a medita iar MediDate a pornit din dorința de a medita în grup.</p> */}
                {/* <p>
                  Programul îți oferă posibilitatea de a face parte dintr-un grup care se întâlnește în mediul virtual pentru a medita. Scopul acestei practici
                  este de a crea un spațiu în care tu să poți să îți liniștești mintea și în care să îți setezi intenția de a fi centrat în momentul prezent.
                </p> */}
              
              </div>

              <div className="center">
                <button className="violet-btn mt1">Programează o ședință</button>
              </div>
              <p>este GRATUIT</p>
            </div>
          </div>
        </section>
      </section>

      <section className="thp-hero m-bimage">
        <div className="c-text">
          <h1>Beneficiile meditației:</h1>
          <p> &#9633; reduce treptat stresul și întârzie îmbatrinirea;</p>
          <p> &#9633; accentuează starea de pace și de relaxare;</p>
          <p> &#9633; scade nivelul de anxietate și depresie;</p>
          <p> &#9633; imbunătățește sistemul imunitar și nivelul evergiei;</p>
          <p> &#9633; creste puterea de concentrare.</p>
        </div>
      </section>

      <section className="th-sec2 thp-hero">
        {/* <div className="th-banner ">
          <h1 className="th-container">Locurile sunt limitate!</h1>
        </div> */}

        <div className="flex-this-c-sec2">
          <div className="text">
            <p>Una dintre plăcerile mele este aceea de a medita iar MediDate a pornit din dorința de a medita în grup.</p>
            <p>Programul îți oferă posibilitatea de a face parte dintr-un grup care se întâlnește în mediul virtual pentru a medita.</p>
            <p>
              Scopul acestei practici este de a crea un spațiu în care tu să poți să îți liniștești mintea și în care să îți setezi intenția de a fi centrat în
              momentul prezent.
            </p>
          </div>

          {/* <div className="c-price-card">
            <PriceCard pach="CURĂȚARE ENERGETICĂ" bgcolor="#ddc32c" textcolor="black" time="30" nrsesions="1" price="0" />
          </div> */}
        </div>

        <div className="center">
                <button className="violet-btn mt1">Mă înscriu!</button>
        </div>

        <p className="info-price-card">*Ședința durează aproximativ 30 de minute și se realizează pe Zoom. Este Gratuit!</p>
      </section>

      <Footer />
    </>
  );
}

export default Medidate;
