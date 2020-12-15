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

        <section className="th-sec2 thp-hero">
          <div className="th-banner bt1px">
            <h1 className="th-container">“Vindecarea trebuie realizată în prezent pentru a debloca viitorul.”</h1>
          </div>

          <PriceSection />

          <p className="info-price-card">*Ședința durează aproximativ o oră și se realizează pe Zoom. Confidențialitatea este garantată!</p>
        </section>

        <section className="th-sec3 thp-hero">
          <div className="th-banner2">
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
              question="Cum se desfasoara o sesiunea de terapie ThetaHealing®?"
              answer="Sesiunile de terapie ThetaHealing® functioneaza asemanator unei sesiuni de psihoterapie. Pe baza subiectului ales de tine vom identifica impreuna
               convingerile tale limitative,
               fricile si amintirile care sunt stocate in subcontient. 
               Pentru toate acestea vom utiliza metoda saparii profunde si testul kinesiologic. 
               Dupa ce au fost identificare si testate va urma partea in care le vom elimina din subcontient si le vom schimba cu programe aprobate de tine menite sa 
               iti creeze o realitate mai buna si mai potrivita. Pe langa toate acestea vom invata noi sentimente, vom scana corpul tau fizic si energetic si vom cere vindecari."
            />
            <Question
              question="De ce schimbam programele din si in subcontient?"
              answer="Imagineaza-ti ca subcontientul tau este o caseta pe care s-au inregistrat cantece foarte vechi. Daca vrei sa asculti alte cantece trebuie sa le stergi
               pe cele existente si sa inregistrezi altele. Asa functioneaza si subcontientul tau. El a stocat programe, frici si amintiri inca din momentul in care tu
                te-ai nascut si pana acum si le ruleaza in fiecare clipa, neincetat, chiar si atunci cand dormi. De asemenea subcontientul este responsabil de 90% din gandurile,
                 emotiile si actiunile noastre din fiecare zi. Studiile arata ca subcontientul nostru are puterea de a crea realitatea pe care noi o traim zilnic pe baza informatiilor
                  pe care le detine deja. De aceea schimbam programe din si in subcontient, pentru a avea posibilitatea de a-ti crea o alta realitate si a trai o viata mai buna si mai
                   linistita."
            />
             <Question
              question="Cat timp dureaza o sedinta de terapie ThetaHealing®?"
              answer="O sedinta de terapie dureaza aproximativa 60 de minute. Prima sedinta face exceptie si poate dura aproximativ 90 de minute deoarece ne vom aloca timp sa ne 
              cunoastem, sa te familiarizezi cu Theta si cu testul muscular."
            />
            <Question
              question="Ce este testul muscular?"
              answer="Testul muscular este o metoda prin care tu poti sa descoperi cu ajutorul corpului fizic daca o convingere face sau nu parte din subcontientul tau. 
              Testul muscular se va realiza inainte si dupa ce convingerile tale au fost schimbate."
            />
            <Question
              question="Cum ma pregatesc pentru o sedinta de terapie ThetaHealing®?"
              answer="Inainte de sedinta de terapie este important ca tu sa decizi pe ce anume vrei sa lucrezi si sa eliberezi din subcontientul tau. 
              De asemenea, este important sa te asiguri ca in timpul sesiunii de terapie te afli intr-un spatiu in care un vei fi deranjat si ca ai 
              in apropierea ta apa cu care sa te hidratezi."
            />
            <Question
              question="La cate sedinte este necesar sa particip ca sa obtin rezultatele pe care mi le doresc?"
              answer="Depinde mereu de situatia pe care vrei sa o rezolvi si cat este de inradacinata in subcontientul tau. Din experienta mea unele situatii
               se rezolva intr-o sesiune, pe cand altele au nevoie de 3-4 intalniri. Cu cat esti mai deschis sa primesti schimbarea cu atat vindecarea va fi mai accelerata."
            />
            <Question
              question="Voi simti schimbari inca de la prima sedinta?"
              answer="Da, vei simti schimbari imediate inca de la prima sedinta. Vei observa ca dupa sesiunea de terapie te vei simti mai relaxat, 
              energizat si eliberat, ca si cum ti s-a luat ceva de pe umeri."
            />
            <Question
              question="Cat de des ar trebui sa particip la sesiuni individuale de terapie ThetaHealing®?"
              answer="Depinde doar de tine si de rezultatele pe care vrei sa le obtii. Personal, eu lucrez in Theta zilnic si descopar programe si frici care ma saboteaza."
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
