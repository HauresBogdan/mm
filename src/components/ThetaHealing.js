import Question from "./Question";
import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";

function ThetaHealing() {
  return (
    <>
      <div className="thetahealing ">
        <section className="th-sec1">
          <div className="th-banner">
            <h1 className="th-container">Terapia ThetaHealing®</h1>
          </div>
          <section className="thp-hero">
            <div className="flex-this-thp1 th-container">
              <div className="left-flex-thp1">
                <img className="gld" src="gld3.png" alt="gld" />
                <h2>Ești pregătit să faci o schimbare?</h2>
                <p>Orice provocare din viața ta are la bază credințe și frici limitative înmagazinate în subcontient.</p>
                <p>
                  Tehnica ThetaHealing® este o modalitate de vindecare emoțională, mentală, fizică și spirituală care acționează direct la sursa oricarei
                  probleme.
                </p>
                <div className="center">
                  <button className="violet-btn mt1">Programează o ședință</button>
                </div>
              </div>
              <div className="right-flex-thp1">
                <img src="thp-1.jpg" alt="mihaela maierean thetahealing" />
              </div>
            </div>
          </section>

          <div className="th-banner2">
            <h1 className="th-container">Ce putem realiza cu ThetaHealing®</h1>
          </div>

          <section className="thp-hero">
            <div className="flex-this-thp2 th-container">
              <div className="left-flex-thp2">
                <h2>Prin intermediul acestei terapii, avem posibilitatea de a:</h2>
                <ul>
                  <li>Schimba convingeri și credințe limitative.</li>
                  <li>Elibera frici.</li>
                  <li>Descărca în subconstientul nostru noi sentimente și perspective.</li>
                  <li>Vindeca relațiile cu cei din jurul nostru , atât din prezent cât și din trecut.</li>
                  <li>Curața atât pe noi cât și spațiile din jurul nostru de energii nedorite.</li>
                </ul>
              </div>
              <div className="right-flex-thp2">
                <img className="happy" src="happy.png" alt="gld" />
              </div>

              <div className="center-long th-container">
                <p>
                  Pe parcursul ședinței de terapie vom lucra pe subiectul ales de tine, stabilindu-ne intenția de a ajunge împreună la fricile și convingerile
                  de bază, care vor fi apoi eliminate din subcontientul tău și înlocuite cu alte programe eficiente și constructive.
                </p>
                <p>Vindecarea se realizează la nivelul subcontientului responsabil pentru 90% din gândurile, emoțiile și acțiunile noastre din fiecare zi.</p>
                <p>
                  Studiile arată că subcontientul nostru are puterea de a crea realitatea pe care noi o trăim zilnic pe baza informațiilor pe care le deține
                  deja.
                </p>
                <p>Lucrul în Theta îți permite să îți reprogramezi subcontientul cu programe aprobate de tine reușind astfel să îți creezi o altă realitate.</p>
              </div>
            </div>
          </section>
        </section>

        
         
       

        <section className="th-sec2">
          <div className="th-banner bt1px">
            <h1 className="th-container">“Vindecarea trebuie realizată în prezent pentru a debloca viitorul.”</h1>
          </div>
          <img src="" alt="somthing" />
          <p>Ședința durează aproximativ o oră și se realizează pe Zoom. Confidențialitatea este garantată!</p>
          <p>Valoare: O ședință – 121 RON, Două ședințe – 222 RON, Patru ședințe – 444 RON.</p>
          <div className="center">
            <button className="violet-btn">Programare</button>
          </div>
        </section>

        <section className="th-sec3">
          <div className="th-banner2">
            <h1 className="th-container">Întrebări frecvente</h1>
          </div>

          <Question
            question="Ce reprezintă Tehnica ThetaHealing®?"
            answer="Tehnica Theta reprezintă o formă de meditație sau de rugăciune îndreptată către Creator care le permite oamenilor să își elibereze convingerile și fricile care îi limitează în viața de zi cu zi. Această tehnică a fost descoperită de Vianna Stibal în anul 1995 în timpul unei sesiuni de vindecare a propriului său corp. Prin ThetaHealing® vindecarea se realizează la nivel fizic, 
            psihic și spiritual în timp real și definitiv. De asemenea ea deschide noi posibilități în viața oricarei persoane care o practică.În esența ThetaHealing® este bazată pe un proces
             de meditație prin care se accesează undele Theta ale creierului. În momentul în care creierul se află în această frecvență, Theta, ce accesăm defapt este subcontientul unde avem
              posibilitatea de a modifica programele care sunt înregistrate acolo. Fiecare dintre noi are capacitatea de a-și accesa undele Theta și o facem atunci când dormim, când medităm sau când realizăm o acțiune mecanică repetitivă ca atunci când conducem mașina.

ThetaHealing® este o formă de terapie, nu o religie. De asemenea este recomandat a fi utilizată împreună cu medicina convențională."
          />
          <div className="center">
            <button className="violet-btn">Programare</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ThetaHealing;
