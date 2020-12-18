import Question from "./Question";
import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";
import PriceSection from "./PriceSection";

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
                <img className="icon1" src="icon1.png" alt="gld" />
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
            </div>
          </section>         

          <section className="thp-hero2">
            <div className="flex-this-thp2 th-container">
              <div className="left-flex-thp2">
                <h2>Prin intermediul acestei terapii, avem posibilitatea de a:</h2>
                <ul>
                  <li>Schimba convingeri limitative și elibera frici.</li>
                  <li>Descărca în subconstientul nostru noi sentimente și perspective.</li>
                  <li>Vindeca relațiile cu cei din jurul nostru , atât din prezent cât și din trecut.</li>
                  <li>Curața atât pe noi cât și spațiile din jurul nostru de energii nedorite.</li>
                </ul>
              </div>                          
            </div>
          </section>
        </section>


              <section className="thp-hero3">
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
              </section>

        <section className="th-sec2 thp-hero4">
          <div className="th-banner">
            <h1 className="th-container">“Vindecarea trebuie realizată în prezent pentru a debloca viitorul.”</h1>
          </div>

          <PriceSection />

          <p className="info-price-card">*Ședința durează aproximativ o oră și se realizează pe Zoom. Confidențialitatea este garantată!</p>
        </section>

        <section className="th-sec3 thp-hero">
          <div className="th-banner">
            <h1 className="th-container">Întrebări frecvente</h1>
          </div>
          <div className="questions th-container">
            <Question
              question="Ce reprezintă Tehnica ThetaHealing®?"
              answer="Tehnica Theta reprezintă o formă de meditație sau de rugăciune îndreptată către Creator care le permite oamenilor să își elibereze convingerile și fricile care îi limitează în viața de zi cu zi. Această tehnică a fost descoperită de Vianna Stibal în anul 1995 în timpul unei sesiuni de vindecare a propriului său corp. Prin ThetaHealing® vindecarea se realizează la nivel fizic, 
            psihic și spiritual în timp real și definitiv. De asemenea ea deschide noi posibilități în viața oricarei persoane care o practică.În esența ThetaHealing® este bazată pe un proces
             de meditație prin care se accesează undele Theta ale creierului. În momentul în care creierul se află în această frecvență, Theta, ce accesăm defapt este subcontientul unde avem
              posibilitatea de a modifica programele care sunt înregistrate acolo. Fiecare dintre noi are capacitatea de a-și accesa undele Theta și o facem atunci când dormim, când medităm sau când realizăm o acțiune mecanică repetitivă ca atunci când conducem mașina.

ThetaHealing® este o formă de terapie, nu o religie. De asemenea este recomandat a fi utilizată împreună cu medicina convențională."
            showing="true"/>
            <Question
              question="Cum se desfășoară o sesiune de terapie ThetaHealing?"
              answer="Sesiunile de terapie ThetaHealing® funcționează asemănător unei sesiuni de psihoterapie. Pe baza subiectului ales de tine vom identifica împreună
               convingerile tale limitative,
               fricile și amintirile care sunt stocate în subcontient. 
               Pentru toate acestea vom utiliza metoda săpării profunde și testul kinesiologic. 
               După ce au fost identificate și testate va urma partea în care le vom elimina din subcontient și le vom schimba cu programe aprobate de tine menite să 
               îți creeze o realitate mai bună și mai potrivită. Pe langă toate acestea vom învăța noi sentimente, vom scana corpul tău fizic și energetic și vom cere vindecări."
            />
            <Question
              question="De ce schimbăm programele din și în subcontient?"
              answer="Imaginează-ți că subcontientul tău este o casetă pe care s-au înregistrat cantece foarte vechi. Dacă vrei să asculți alte cantece trebuie să le stergi
               pe cele existente și să înregistrezi altele. Așa funcționează și subcontientul tău. El a stocat programe, frici și amintiri încă din momentul în care tu
                te-ai născut și până acum și le rulează în fiecare clipă, neîncetat, chiar și atunci cand dormi. De asemenea subcontientul este responsabil de 90% din gândurile,
                 emoțiile și acțiunile noastre din fiecare zi. Studiile arată că subcontientul nostru are puterea de a crea realitatea pe care noi o trăim zilnic pe baza informațiilor
                  pe care le deținem deja. De aceea schimbăm programe din și în subcontient, pentru a avea posibilitatea de a-ți crea o alta realitate și a trăi o viață mai bună și mai
                   liniștită."
            />
             <Question
              question="Cât timp durează o ședință de terapie ThetaHealing?"
              answer="O ședință de terapie durează aproximativ 60 de minute. Prima ședință face excepție și poate dura aproximativ 90 de minute deoarece ne vom aloca timp să ne 
              cunoaștem, să te familiarizezi cu Theta și cu testul muscular."
            />
            <Question
              question="Ce este testul muscular?"
              answer="Testul muscular este o metodă prin care tu poți să descoperi cu ajutorul corpului fizic dacă o convingere face sau nu parte din subcontientul tău. 
              Testul muscular se va realiza înainte și după ce convingerile tale au fost schimbate."
            />
            <Question
              question="Cum mă pregătesc pentru o ședință de terapie ThetaHealing?"
              answer="Înainte de ședința de terapie este important ca tu să decizi pe ce anume vrei să lucrezi și să eliberezi din subcontientul tău. 
              De asemenea, este important să te asiguri că în timpul sesiunii de terapie te afli într-un spațiu în care nu vei fi deranjat și ca ai 
              în apropierea ta apă cu care să te hidratezi."
            />
            <Question
              question="La cate ședințe este necesar să particip ca să obțin rezultatele pe care mi le doresc?"
              answer="Depinde mereu de situația pe care vrei să o rezolvi și cât este de înrădăcinată în subcontientul tău. Din experiența mea unele situații
               se rezolvă într-o sesiune, pe când altele au nevoie de 3-4 întâlniri. Cu cât ești mai deschis să primești schimbarea cu atât vindecarea va fi mai accelerată."
            />
            <Question
              question="Voi simți schimbări încă de la prima ședință?"
              answer="Da, vei simți schimbări imediate încă de la prima ședință. Vei observa că după sesiunea de terapie te vei simți mai relaxat, 
              energizat și eliberat, ca și cum ți s-a luat ceva de pe umeri."
            />
            <Question
              question="Cât de des ar trebui să particip la sesiuni individuale de terapie ThetaHealing®?"
              answer="Depinde doar de tine și de rezultatele pe care vrei să le obții. Personal, eu lucrez în Theta zilnic și descopăr programe și frici care mă sabotează."
            />
          </div>

          {/* <div className="center">
            <button className="violet-btn">Programare</button>
          </div> */}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ThetaHealing;
