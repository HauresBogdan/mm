import Footer from "./Footer";
import classNames from "classnames";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/anxietate.css";
import "../sidepagecss/manifestare.css";
import "../sidepagecss/contact.css";
import Question from "./Question";
import { useForm } from "react-hook-form";
import Facilitatoarea from "./Facilitatoarea.js";
import Testimonials2 from "./Testimonials2.js";

export default function Manifestare() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="anxietate">
        <section className="anxietate1">
          <img className="anxiety1-img" src="manifestare1.png" alt="flower" />
          <h1>Sesiuni de manifestare constienta</h1>
          <p>Practici de manifestare si creare a realitatii dorite pe care toata lumea ar trebui sa le cunoasca.</p>
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
          <p>Eu sunt Mihaela si te voi ghida in procesul tau de manifestare al RELATIILOR</p>
        </section>
        <div className="banner-anxi2">
          <h1>De ce sa particip!</h1>
        </div>
        <section className="anxietate2">
          <div className="paragraphs-anxi2 standard-text">
            <p>- Vei invata sa manifesti relatiile pe care ti le doresti folosindu-ti propriile emotii; </p>
            <p>- Vei descoperi cum poti sa te conectezi la puterea personala intr-un mod foarte rapid;</p>
            <p>
              - Vei invata cum poti sa iti muti atentia de la ganduri si sentimente de vibratie joasa (negative) la ganduri si sentimente de vibratie inalta
              (pozitive);
            </p>
            <p>- Vei descoperi care este povestea pe care ti-o spui zilnic despre relatii si cum iti afecteaza ea realitatea;</p>
            <p>- Vei face parte dintr-un grup de oameni care vor trece prin aceleasi procese ca si tine;</p>
            <p>- Vei deveni constant/a in practicile de manifestare.</p>
            <p>- Vei folosi recunostinta pentru a manifesta noua ta realitate.</p>
          </div>
          <div className="flex-center mt30px">
            <button className="violet-btn">VREAU SI EU</button>
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
            <h1 className="anxi-title text-align-center">Despre Sesiunile de Manifestare Constienta</h1>
            <h2>Ce este acest program?</h2>
            <div className="standard-text text-align-justify">
              <p>
                Programul Sesiuni de Manifestare Constienta contine o serie de practici care iti permit sa observi ca toata puterea creatoare si de manifestare
                se afla in tine. Eu te vom ajuta sa o identifici si sa o folosesti intr-un mod constient, accelerand astfel procesul de manifestare.
              </p>
              <p>
                De cele mai multe ori vibratia noastra fata de ceea ce ne dorim nu este direct proportionala cu energia obiectului/situatiei respective. Ce
                inseamna asta? Spre exemplu, ne dorim relatii de succes, dar la nivel energetic emanam lipsa acestora in viata noastra. De aceea in final
                atragem acele relatii pe care nu ni le dorim deoarece manifestarea se realizeaza la nivel energetic si vibrational.
              </p>
              <p>
                Acest program vine in sprijinul tau tocmai pentru a te ghida in identificarea blocajelor tale energetice, eliminarea lor si acordarea energiei
                tale la energia relatiilor dorite.
              </p>
            </div>

            <h2>Cum se desfasoara?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                  <p>
                    Prin 2 intalniri saptamanale live si online, timp de 2 saptamani. Fiecare intalnire dureaza 60 min. Incepem cu o meditatie ghidata prin care
                    vei integra sentimentul necesar pentru a manifesta usor si cu bucurie tot ceea ce-ti doresti. Terminam cu discutii si raspunsuri la
                    intrebarile tale.
                  </p>
                  <p>
                    Dupa de fiecare sesiune de manifestare, iti voi trimite un scurt video cu detalii despre activitatile individuale. Fii fara griji, fiecare
                    activitate iti va lua maximum 10 minute, zilnic.
                  </p>
                </div>
              </div>
            </div>

            <h2>Ce include?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                  <p>- 4 sesiuni de manifestare live prin meditatie si exercitii mentale;</p>
                  <p>- 2 meditatii inregistrate pe care le vei face in ritmul tau;</p>
                  <p>- scurte activitati individuale pe care le vei face singur dupa sesiunea de manifestare;</p>
                  <p>- sustinerea mea pe tot parcursul programului;</p>
                  <p>- acces la un grup exclusiv pe Facebook in care vei putea impartasi cu ceilalti participanti si aprofunda subiectele;</p>
                  <p>- un premiu oferit prin exagere la sorti, si anume: o sesiune gratuita de terapie ThetaHealing cu Mihaela.</p>
                </div>
              </div>
            </div>

            <div className="flex-center mt45px">
              <button className="violet-btn">Ma inscriu</button>
            </div>
          </div>
        </section>
        <Facilitatoarea />
        <section className="anxietate6">
          <h1 className="anxi6-title text-align-center">Intrebari frecvente</h1>
          <div className="anxi-questions anxi-container">
            <Question
              question="Cand se desfasoara acest program?"
              answer="Sesiunile de Manifestare Constienta incep pe 27 octombrie la ora 9 PM, ora Romaniei. Ne vom vedea in fiecare Marti si Joi de la 9 PM, ora Romaniei. Locatie: Online"
              showing="true"
            />
            <Question
              question="Daca lipsesc de la intalnirea online voi primi inregistrarea meditatiei? "
              answer="Fii fara griji! Daca se intampla sa lipsesti de la intalnirea online, iti voi da acces la inregistrare."
            />
            <Question
              question="Voi putea accesa intalnirea online de pe computer/telefon/tableta? "
              answer="Da, tot ce trebuie sa faci este sa te asiguri ca ai o buna conexiune la internet."
            />
            <Question
              question="Este rambursabila taxa de inscriere?"
              answer="In cazul in care intervine ceva neprevazut, poti primi valoarea investita daca aduci un inlocuitor."
            />
          </div>
        </section>
        <Testimonials2 />
        <section className="anxietate8">
          <h2 className="text-align-center">Investitie:</h2>
          <div className="text-align-center">
            <div className="center-but-left">
              <div className="standard-text">
                <p>
                  <span>EARLY BIRD</span>
                  <strong> 176 RON</strong> pana pe 18 octombrie.
                </p>
                <p>
                  <span>Investitia integrala</span>
                  <strong> 256 RON</strong> pana pe 23 octombrie.
                </p>
                <p>*Plata se face prin transfer bancar, detaliile le primesti pe email dupa inregistrare.</p>
                <p>
                  <strong>Grabeste-te, locurile sunt limitate!</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="anxietate9">
          <h2>Hai la Sesiunile de Manifestare Constienta!</h2>
          <div className="contact-contact anxi-form-container">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Nume</label>
              <div className="contact-errors">
                <p>{errors.name && "Nu ai introdus numele"}</p>
              </div>
              <input type="text" id="name" name="name" placeholder="Nume" ref={register({ required: true })} />
              <label htmlFor="email">Email</label>
              <div className="contact-errors">
                <p>{errors.email && "Email invalid"}</p>
              </div>
              <input type="email" id="email" name="email" placeholder="Email.." ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} />
              <button className="violet-btn" type="submit">
                Trimite
              </button>
            </form>
          </div>
          <div className="text-align-center">
            <p>*Locul este confirmat dupa inregistrarea platii.</p>
            <p>Detalii in email-ul de confirmare. Verifica si Spam-ul.</p>
          </div>
        </section>
        <div className="quote-divider">
          <div className="anxi-container">
          <p>
            "Poti sa traiesti orice senzatie doresti, in orice moment doresti. Adesea vei descoperi ca, prin crearea unei anumite trairi in interioare, poti
            crea un eveniment in afara ta. Acest lucru se intampla deoarece trairile, sentimente, misca energia - iar energia este materia din care este facuta
            viata."
          </p>
          <p>Neale Donald Walsch</p>
          </div>
         
        </div>
        <section className="anxietate10">
          <img src="bani-sticker.svg" alt="retur" />
          <div className="mt15px">
            <p>*Acest program iti ofera o garantie de 30 de zile in care poti cere banii inapoi.</p>
            <p>Ganduri bune!</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
