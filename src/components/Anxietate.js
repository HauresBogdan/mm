import Footer from "./Footer";
import { useEffect, useState } from "react";
import classNames from "classnames";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/anxietate.css";
import "../sidepagecss/contact.css";
import Question from "./Question";

// import { useForm } from "react-hook-form";
import Facilitatoarea from "./Facilitatoarea.js";
import Testimonials2 from "./Testimonials2.js";

export default function Anxietate() {
  const [anxi11Hover, setAnxi11Hover] = useState(false);
  const [anxi12Hover, setAnxi12Hover] = useState(false);
  // const { register, handleSubmit, errors } = useForm(); // initialize the hook

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  useEffect(() => {
    const js = `
      function ml_webform_success_3305692() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-3305692 .ml-block-success').show();
        $('.ml-subscribe-form-3305692 .ml-block-form').hide();
      };
    `;
    const script = document.createElement("script");
    const scriptText = document.createTextNode(js);
    script.appendChild(scriptText);
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://static.mailerlite.com/js/w/webforms.min.js?v28bf44f740701752bfc6767bc7e171d4";
    document.body.appendChild(script2);
  }, []);

 
  return (
    <>
      <div className="anxietate">
        <section className="anxietate1">
          <img className="anxiety1-img" src="anxiety1.png" alt="flower" />
          <h1>Eliberare de anxietate</h1>
          <p>~Prin meditație ghidată~</p>
          <div className="anx1-imgs">
            <div className="anxi11-parent">
              <img
                className={classNames("anxi11", { "zoom-img-anxi1": anxi11Hover })}
                src="anxi11.jpeg"
                alt="mihaela maierean"
                onMouseEnter={() => {
                  setAnxi11Hover(true);
                }}
                onMouseLeave={() => {
                  setAnxi11Hover(false);
                }}
              />
            </div>
            <div className="anxi12-parent">
              <img
                className={classNames("anxi12", { "zoom-img-anxi1": anxi12Hover })}
                src="anxi12.jpeg"
                alt="mihaela maierean"
                onMouseEnter={() => {
                  setAnxi12Hover(true);
                }}
                onMouseLeave={() => {
                  setAnxi12Hover(false);
                }}
              />
            </div>
          </div>
        </section>
        <div className="banner-anxi2">
          <h1>De ce sa particip!</h1>
        </div>
        <section className="anxietate2">
          <div className="paragraphs-anxi2 standard-text">
            <p>- Te vei reconecta la corpul tău și la starea de bine; </p>
            <p>- Te vei elibera de starea de anxietate prin intermediul meditației ghidate;</p>
            <p>- Vei curăța energetic spațiul în care locuiești, corpul tău dar și anumite situații care îți provoacă anxietate;</p>
            <p>- Vei vindeca momentul în care a apărut starea de anxietate alături de amintirile care o însoțesc;</p>
            <p>- Îți vei învăța subconștientul cum se simte să trăiască fără anxietate și că este posibil să facă asta;</p>
            <p>- Te vei folosi de imaginația ta pentru a crea o altă realitate care să îți aducă bucurie și pace;</p>
            <p>- Vei folosi recunoștința pentru a manifesta noua ta realitate.</p>
          </div>
          <div className="flex-center mt30px">
            <button className="violet-btn">VREAU ȘI EU</button>
          </div>
        </section>
        <section className="anxietate3">
          <div className="youtube-parent">
            <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/redfzQqzHps"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="embeded-youtube"
            ></iframe>
          </div>
        </section>
        <section className="anxietate4">
          <div className="anxi-container">
            <h1 className="anxi-title text-align-center">Despre Programul: Eliberarea de Anxietate</h1>
            <h2>Ce este acest program?</h2>
            <div className="standard-text text-align-justify">
              <p>
                Acest program este gândit și construit astfel încât tu să te poți elibera de sentimentul anxietății și să te poți reconecta la starea de bucurie
                și de bine.
              </p>
              <p>
                Am început să experimentez starea de anxietate încă de mic copil însă doar de câțiva ani mi-am dat seama cât de mult mă afectează la nivel
                energetic dar și la nivel fizic, experimentând diverse dureri în corpul fizic.
              </p>
              <p>
                Anul acesta am realizat că corpul meu este dependent de anumite substanțe chimice care se creează în momentul în care simt anxietate. Deși
                încercam să vindec efectele anxietății, am înțeles că vindecarea trebuie să realizeze în momentul în care aceasta s-a creat pentru prima data.
                Mai mult, trebuia să îmi învăț corpul și mintea cum se simte să trăiască fără anxietate și fără substanțele chimice care se eliminau și cum să
                se concentreze asupra unui viitor care îmi aduce pace (având în vedere că anxietatea fiind cea care se asociază cu grijile legate de viitor).
              </p>
              <p>Am realizat toate acestea prin intermediul meditației ghidate combinate cu tehnică ThetaHealing.</p>
              <p>
                În acest mod am creat o serie de meditații care să te ajute să vindeci momentul în care ai simțit anxietate pentru prima data, înțelegând că
                aceasta este doar o senzație și un comportament pe care l-ai învățat și care poate fi vindecat, urmate apoi de descărcări în mintea
                subconștientă a unor noi comportamente care să te învețe cum se simte și că este posibil să trăiești fără anxietate. Vom crea apoi o noua
                realitate prin intermediul imaginației care să fie lipsită de anxietate și plină de liniște și bucurie. În final ne vom antrena să rămânem
                concentrați asupra noii realități prin intermediul recunoștinței.
              </p>
            </div>

            <h2>Cum se desfasoară?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                  <p className="first-ul">Prin 5 meditații ghidate pe care le vei face în ritmul tău.</p>
                  <ul>
                    <li>
                      <span>Meditație 1:</span> Curățarea energetică a corpului și spațiului în care locuieșți
                    </li>
                    <li>
                      <span>Meditație 2:</span> Vindecarea momentului în care a apărut anxietatea
                    </li>
                    <li>
                      <span>Meditație 3:</span> Învățăm corpul și mintea cum se simte să trăiască fără anxietate
                    </li>
                    <li>
                      <span>Meditație 4:</span> Crearea unui nou viitor prin intermediul imaginației
                    </li>
                    <li>
                      <span>Meditația 5:</span> Concentrarea asupra noului viitor prin intermediul recunoștinței
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Ce include?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                  <p>- 1 sesiune inițială online și live în care vom povesti despre program și voi răspunde la întrebările tale;</p>
                  <p>- 5 meditații ghidate (între 20 și 30 de minute fiecare) pe care le vei face în ritmul tău și în liniștea casei tale;</p>
                  <p>- acces la acest program pe viată;</p>
                  <p>- susținerea mea pe tot parcursul programului;</p>
                  <p>- acces la un grup exclusiv pe Facebook în care vei putea împărtăși cu ceilalți participanți și aprofunda subiectele.</p>
                </div>
              </div>
            </div>

            <div className="flex-center mt45px">
              <button className="violet-btn">VREAU ȘI EU</button>
            </div>
          </div>
        </section>
        <Facilitatoarea />
        <section className="anxietate6">
          <h1 className="anxi6-title text-align-center">Întrebări frecvente</h1>
          <div className="anxi-questions anxi-container">
            <Question
              question="Când se desfășoară acest program?"
              answer="Acest program se desfășoară în perioada 30 Noiembrie - 5 Decembrie

              Locatie: Online"
              showing="true"
            />
            <Question
              question="Dacă lipsesc de la întâlnirea online voi primi înregistrarea meditației? "
              answer="Fii fără griji! Dacă se întâmplă să lipsești de la întâlnirea online, îți voi da acces la înregistrare."
            />
            <Question
              question="Voi putea accesa întâlnirea online de pe computer/telefon/tabletă? "
              answer="Da, tot ce trebuie să faci este să te asiguri că ai o bună conexiune la internet."
            />
            <Question
              question="Este rambursabilă taxa de înscriere?"
              answer="În cazul în care intervine ceva neprevăzut, poți primi valoarea investită dacă aduci un înlocuitor."
            />
          </div>
        </section>
        <Testimonials2 />
        <section className="anxietate8">
          <h2 className="text-align-center">Investiție:</h2>
          <div className="text-align-center">
            <div className="center-but-left">
              <div className="standard-text">
                <p>
                  <span>EARLY BIRD</span>
                  <strong> 77 RON</strong> până pe 22 noiembrie.
                </p>
                <p>
                  <span>Investiția integrală</span>
                  <strong> 99 RON</strong> până pe 27 noiembrie.
                </p>
                <p>*Plata se face prin transfer bancar, detaliile le primești pe email după înregistrare.</p>
                <p>
                  <strong>Grăbește-te, locurile sunt limitate!</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="anxietate9">
          <h2>Elibereaza-te de Anxietate!</h2>
          <div className="contact-contact anxi-form-container">
            <div id="mlb2-3305692" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3305692">
              <div className="ml-vertical-align-center">
                <div className="subscribe-form ml-block-success" style={{ display: "none" }}>
                  <div className="form-section">
                    <p className="success-msg">Mulțumesc pentru înscriere, un mail a fost trimis către adresa menționată. Verifică și Spam-ul!</p>
                  </div>
                </div>
                <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/h2d6y3" data-id="h2d6y3" data-code="h2d6y3" method="POST" target="_blank">
                  <p className="signup-title">
                    Înscriete în lista pentru anunțuturi ca să primești instrucțiunile cu următori pași pentru a beneficia de acest program!
                  </p>
                  <div className="subscribe-form">
                    <div className="form-section">
                      <div className="form-group ml-field-email ml-validate-required ml-validate-email">
                        <input
                          type="email"
                          name="fields[email]"
                          className="form-control signup-text"
                          placeholder="Email address"
                          autoComplete="email"
                          spellCheck="false"
                          autoCapitalize="off"
                          autoCorrect="off"
                        />
                        <input type="hidden" name="ml-submit" value="1" />

                        <div className="flex-center mt30px">
                          <button type="submit" className="primary signup-button violet-btn">
                            INREGISTRARE
                          </button>
                        </div>

                        <div className="flex-center">
                          <button disabled style={{ display: "none" }} type="button" className="loading violet-btn">
                            SE TRIMITE...
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="text-align-center">
            <p>*Locul este confirmat după înregistrarea plății.</p>
            <p>Detalii în email-ul de confirmare. Verifică și Spam-ul.</p>
          </div>
        </section>
        <section className="anxietate10">
          <img src="bani-sticker.svg" alt="retur" />
          <div className="mt15px">
            <p>*Acest program îți oferă o garanție de 30 de zile în care poți cere banii înapoi.</p>
            <p>Gânduri bune!</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
