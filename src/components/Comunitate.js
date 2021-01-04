import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/anxietate.css";
import "../sidepagecss/manifestare.css";
import "../sidepagecss/comunitate.css";
import "../sidepagecss/contact.css";
import Question from "./Question";
import { useForm } from "react-hook-form";
import Facilitatoarea from "./Facilitatoarea.js";

export default function Comunitate() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="anxietate">
        <section className="anxietate1">
          <img className="anxiety1-img" src="comunitate2.svg" alt="flower" />
          <h1>Grup de susținere și transformare</h1>
          <p className="comunitate-subheader">Comunitatea Gândurilor Pozitive</p>
          <div className="youtube-parent youtube-padding">
            <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/rNgrR45XSfw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="embeded-youtube"
            ></iframe>
          </div>
          <p className="comunitate-subheader">Prin afirmați pozitive și schimbări de perspectivă</p>
        </section>
        <div className="banner-anxi2">
          <h1>De ce să particip!</h1>
        </div>
        <section className="anxietate2">
          <div className="paragraphs-anxi2 standard-text">
            <div className="comunitate-flex">
              <div className="text-com">
                <h2>Accentuează Starea de Pace și Relaxare</h2>
                <p>
                  Repetarea și ascultarea afirmațiilor pozitive au puterea de a te aduce în momentul prezent, relaxând astfel mintea care aduce după sine o
                  senzație de liniște, împlinire și pace.
                </p>
                <p>
                  - Vei învăța cum poți să îți muți atenția de la gânduri și sentimente de vibrație joasă (negative) la gânduri și sentimente de vibrație înaltă
                  (pozitive);
                </p>
              </div>
              <div className="img-com-parrent">
                <img src="grup1.jpeg" alt="mihaela maierean" />
              </div>
            </div>

            <div className="comunitate-flex-r">
              <div className="text-com">
                <h2>Scade Nivelul de Anxietate și Depresie</h2>
                <p>
                  Mintea ta va ieși din tiparul afirmațiilor negative și/sau va înceta să se mai gândească la trecut sau viitor, ceea ce va ajuta la scăderea
                  nivelului de anxietate, stres și depresie.
                </p>
              </div>
              <div className="img-com-parrent">
                <img src="grup2.jpeg" alt="mihaela maierean" />
              </div>
            </div>

            <div className="comunitate-flex">
              <div className="text-com">
                <h2>Îmbunătățirea Calității Vieții</h2>
                <p>
                  Afirmațiile pozitive și schimbările de perspectivă asupra situațiilor din viața ta vor crește nivelul tău energetic și vor îmbunătăți
                  calitatea gândurilor și a sentimentelor tale. Toate acestea se vor reflecta în realitatea pe care tu o trăiești și care se va îmbunătăți treptat.
                </p>
              </div>
              <div className="img-com-parrent">
                <img src="grup3.jpeg" alt="mihaela maierean" />
              </div>
            </div>

            <div className="comunitate-flex-r">
              <div className="text-com">
                <h2>Susținere și Acceptare</h2>
                <p>
                  În cadrul grupului se va crea spațiu în care tu să te poți exprima în ritmul tău fără a te simți judecat și exclus. De asemenea vei fi
                  susținut de persoane care trec prin același proces ca și tine.
                </p>
              </div>
              <div className="img-com-parrent">
                <img src="grup4.jpeg" alt="mihaela maierean" />
              </div>
            </div>
          </div>
          <div className="flex-center mt30px">
            <button className="violet-btn">VREAU ȘI EU</button>
          </div>
        </section>
        <section className="anxietate3">
          <div className="youtube-parent">
            <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/TxU30JMf8mg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="embeded-youtube"
            ></iframe>
          </div>
        </section>
        <section className="anxietate4">
          <div className="anxi-container">
            <h1 className="anxi-title text-align-center">Despre Comunitatea Gândurilor Pozitive</h1>
            <h2>Ce reprezintă?</h2>
            <div className="standard-text text-align-justify">
              <p>
                Când eram copil încă se mai obișnuia ca oamenii de la sat să se întâlnească pentru a munci împreună în timp ce depănau povești. Se crea astfel
                un sentiment de susținere și de apartenență la o comunitate care avea aceleași interese. Comunitatea Gândurilor Pozitive reprezintă o adunare a
                oamenilor, în mediul online, care au dorința de a lucra împreună, prin intermediul afirmațiilor pozitive, cu scopul de a-și crește vibrația
                energetică personală și a întregului grup.
              </p>
            </div>

            <h2>Cum se desfășoară?</h2>
            <div className="text-align-center">
              <div className="standard-text text-align-justify">
                <p>
                Prin intermediul unei întâlniri săptămânale în cadrul căreia vom dezbate subiecte precum relații, abundență, carieră, sănătate etc. Pe baza
                  subiectului vom exprima în mod conștient, fiecare pe rând, afirmații pozitive, fără limite, și fără judecați. În acest mod ne vom educa
                  mintea să gândească pozitiv și să fie prezentă. Treptat subcontientul nostru va învăta o altă perspectivă asupra lucrurilor, situațiilor,
                  relațiilor și persoanelor din viața ta, modificând ușor dar sigur realitatea în care trăiești.
                </p>
              </div>
            </div>

            <div className="flex-center mt45px">
              <button className="violet-btn">Vreau în comunitate</button>
            </div>
          </div>
        </section>
        <Facilitatoarea />

        <section className="anxietate6">
          <h1 className="anxi6-title text-align-center">Întrebări frecvente</h1>
          <div className="anxi-questions anxi-container">
            <Question
              question="Unde se desfășoară?"
              answer="Întâlnirile se desfășoară în fiecare zi de Luni, de la ora 20:00, ora României. Locatie: Online"
              showing="true"
            />
            <Question
              question="Dacă lipsesc de la întâlnirea online voi primi înregistrarea meditației?"
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

        <section className="anxietate8">
          <h2 className="text-align-center">Care este valoarea?</h2>
          <div className="text-align-center">
            <div className="center-but-left">
              <div className="standard-text">
                <p>
                  <span>Abonament</span>
                  <strong> 55 RON</strong> (valabil o lună de la achiziționare).
                </p>
                <p>*Plata se realizează prin transfer bancar.</p>
                <p>
                  <strong>Te poți înscrie în comunitate în orice moment.</strong>
                </p>
                <p>După înscriere vei avea acces în grupul exclusiv al comunității pe viață.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="anxietate9">
          <h2>Fii parte din Comunitatea Gandurilor Pozitive!</h2>
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
            <p>*Locul este confirmat după înregistrarea plății.</p>
            <p>Detalii în email-ul de confirmare. Verifică și Spam-ul.</p>
          </div>
        </section>
        <div className="quote-divider">
          <div className="anxi-container">
            <p>“Dacă schimbi felul în care te uiți la lucrurile din jur, lucrurile la care te uiți se vor schimba”</p>
            <p>Wayne Dyer</p>
          </div>
        </div>
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
