import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/anxietate.css";
import "../sidepagecss/manifestare.css";
import "../sidepagecss/contact.css";
import Question from "./Question";
// import { useForm } from "react-hook-form";
import Facilitatoarea from "./Facilitatoarea.js";
import Testimonials2 from "./Testimonials2.js";
import { useEffect } from "react";

export default function Manifestare() {
  // const { register, handleSubmit, errors } = useForm(); // initialize the hook

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  useEffect(() => {
    const js = `
      function ml_webform_success_3321610() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-3321610 .ml-block-success').show();
        $('.ml-subscribe-form-3321610 .ml-block-form').hide();
      };
    `;
    const script = document.createElement("script");
    const scriptText = document.createTextNode(js);
    script.appendChild(scriptText);
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://static.mailerlite.com/js/w/webforms.min.js?v28bf44f740701752bfc6767bc7e171d4";
    document.body.appendChild(script2);
    console.log("success");
  }, []);

  return (
    <>
      <div className="anxietate">
        <section className="anxietate1">
          <img className="anxiety1-img" src="manifestare1.png" alt="flower" />
          <h1>Sesiuni de manifestare conștientă</h1>
          <p>Practici de manifestare şi creare a realităţii dorite pe care toată lumea ar trebui să le cunoască.</p>
          <div className="youtube-parent youtube-padding">
            <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/lZielNATvVM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="embeded-youtube"
            ></iframe>
          </div>
          <p> Eu sunt Mihaela și te voi ghida în procesul tău de manifestare al RELAȚIILOR </p>
        </section>
        <div className="banner-anxi2">
          <h1>De ce să particip!</h1>
        </div>
        <section className="anxietate2">
          <div className="paragraphs-anxi2 standard-text">
            <p>- Vei învăța să manifești relațiile pe care ți le dorești folosindu-ți propriile emoții; </p>
            <p>- Vei descoperi cum poți să te conectezi la puterea personală într-un mod foarte rapid;</p>
            <p>
              -  Vei învăța cum poți să îți muți atenția de la gânduri și sentimente de vibrație joasă (negative) la gânduri și sentimente de vibrație înaltă (pozitive); 
            </p>
            <p>- Vei descoperi care este povestea pe care ți-o spui zilnic despre relații și cum îți afectează ea realitatea;</p>
            <p>- Vei face parte dintr-un grup de oameni care vor trece prin aceleași procese că și ține;</p>
            <p>- Vei deveni constant/ă în practicile de manifestare.</p>
            <p>- Vei folosi recunoștință pentru a manifesta noua ta realitate.</p>
          </div>
          <div className="flex-center mt30px">
            <button className="violet-btn">VREAU ȘI EU</button>
          </div>
        </section>
        <section className="anxietate3">
          <div className="youtube-parent">
            <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/lHiSR0Rievs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="embeded-youtube"
            ></iframe>
          </div>
        </section>
        <section className="anxietate4">
          <div className="anxi-container">
            <h1 className="anxi-title text-align-center">Despre Sesiunile de Manifestare Conștientă</h1>
            <h2>Ce este acest program?</h2>
            <div className="standard-text text-align-justify">
              <p>
              Programul Sesiuni de Manifestare Conștientă conține o serie de practici care îți permit să observi că toată puterea creatoare și de manifestare
              se află în ține. Eu te vom ajuta să o identifici și să o folosești într-un mod conștient, accelerând astfel procesul de manifestare.
              </p>
              <p>
              De cele mai multe ori vibrația noastră față de ceea ce ne dorim nu este direct proporțională cu energia obiectului/situației respective. Ce 
                 înseamnă asta? Spre exemplu, ne dorim relații de succes, dar la nivel energetic emanăm lipsa acestora în viața noastră. De aceea în final 
                 atragem acele relații pe care nu ni le dorim deoarece manifestarea se realizează la nivel energetic și vibrațional.
              </p>
              <p>
              Acest program vine în sprijinul tău tocmai pentru a te ghida în identificarea blocajelor tale energetice, eliminarea lor și acordarea energiei 
                 tale la energia relațiilor dorite. 
              </p>
            </div>

            <h2>Cum se desfasoară?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                  <p>
                  Prin 2 întâlniri săptămânale live și online, timp de 2 săptămâni. Fiecare întâlnire durează 60 min. Începem cu o meditație ghidată prin care 
                     vei integra sentimentul necesar pentru a manifesta ușor și cu bucurie tot ceea ce-ți dorești. Terminăm cu discuții și răspunsuri la 
                     întrebările tale. 
                  </p>
                  <p>
                  După de fiecare sesiune de manifestare, îți voi trimite un scurt video cu detalii despre activitățile individuale. Fii fără griji, fiecare 
                     activitate îți va luă maximum 10 minute, zilnic.
                  </p>
                </div>
              </div>
            </div>

            <h2>Ce include?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                <p>- 4 sesiuni de manifestare live prin meditație și exerciții mentale;</p> 
                   <p>- 2 meditații înregistrate pe care le vei face în ritmul tău;</p> 
                   <p>- scurte activități individuale pe care le vei face singur după sesiunea de manifestare;</p> 
                   <p>- susținerea mea pe tot parcursul programului;</p> 
                   <p>- acces la un grup exclusiv pe Facebook în care vei putea împărtăși cu ceilalți participanți și aprofunda subiectele;</p> 
                   <p>- un premiu oferit prin extragere la sorți, și anume: o sesiune gratuită de terapie ThetaHealing cu Mihaela.</p> 
                </div>
              </div>
            </div>

            <div className="flex-center mt45px">
              <button className="violet-btn">Ma înscriu</button>
            </div>
          </div>
        </section>
        <Facilitatoarea />
        <section className="anxietate6">
          <h1 className="anxi6-title text-align-center">Întrebări frecvente</h1>
          <div className="anxi-questions anxi-container">
            <Question
              question="Când se desfășoară acest program?"
              answer="Sesiunile de Manifestare Conștientă încep pe 27 octombrie la ora 9 PM, ora României. Ne vom vedea în fiecare Marți și Joi de la 9 PM, ora României. Locație: Online"
              showing="true"
            />
            <Question
              question="Dacă lipsesc de la întâlnirea online voi primi înregistrarea meditației? "
              answer="Fii fără griji! Dacă se întâmplă să lipsești de la întâlnirea online, îți voi da acces la înregistrare."
            />
            <Question
              question="Voi putea accesa întâlnirea online de pe computer/telefon/tabletă?"
              answer="Da, tot ce trebuie să faci este să te asiguri că ai o bună conexiune la internet."
            />
            <Question
              question="Este rambursabilă taxa de înscriere? "
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
                  <strong> 176 RON</strong> până pe 18 octombrie.
                </p>
                <p>
                  <span>Investiția integrală </span>
                  <strong> 256 RON</strong> până pe 23 octombrie.
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
          <h2> Hai la Sesiunile de Manifestare Conștientă!</h2>
          <div className="contact-contact anxi-form-container">
          <div id="mlb2-3321610" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3321610">
              <div className="ml-vertical-align-center">
                <div className="subscribe-form ml-block-success" style={{ display: "none" }}>
                  <div className="form-section">
                    <p className="success-msg">Mulțumesc pentru înscriere, un mail a fost trimis către adresa menționată. Verifică și Spam-ul!</p>
                  </div>
                </div>
                <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/c1f7c2" data-id="c1f7c2" data-code="c1f7c2" method="POST" target="_blank">
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
        <div className="quote-divider">
          <div className="anxi-container">
            <p>
            "Poți să trăiești orice senzație dorești, în orice moment dorești. Adesea vei descoperi că, prin crearea unei anumite trăiri interioare, poți 
               crea un eveniment în afara ta. Acest lucru se întâmplă deoarece trăirile și sentimentele mișcă energia, iar energia este materia din care este 
               făcută viață." 
            </p>
            <p>Neale Donald Walsch</p>
          </div>
        </div>
        <section className="anxietate10">
          <img src="bani-sticker.svg" alt="retur" />
          <div className="mt15px">
            <p>*Acest program îți oferă o garanție de 30 de zile în care poți cere banii înapoi</p>
            <p>Gânduri bune!</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
