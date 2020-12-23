import Footer from "./Footer";
import { useState } from "react";
import classNames from "classnames";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/anxietate.css";
import "../sidepagecss/contact.css";
import Question from "./Question";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useForm } from "react-hook-form";

export default function Anxietate() {
  const [anxi11Hover, setAnxi11Hover] = useState(false);
  const [anxi12Hover, setAnxi12Hover] = useState(false);
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {" "}
      <div className="anxietate">
        <section className="anxietate1">
          <img className="anxiety1-img" src="anxiety1.png" alt="flower" />
          <h1>Eliberare de anxietate</h1>
          <p>~Prin meditatatie ghidata~</p>
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
            <p>- Te vei reconecta la corpul tau si la starea de bine; </p>
            <p>- Te vei elibera de starea de anxietate prin intermediul meditatiei ghidate;</p>
            <p>- Vei curata energetic spatiul in care locuiesti, corpul tau dar si anumite situatii care iti provoaca anxietate;</p>
            <p>- Vei vindeca momentul in care a aparut starea de anxietate alaturi de amintirile care o insotesc;</p>
            <p>- Iti vei invata subcontientul cum se simte sa traiasca fara anxientate si ca este posibil sa faca asta;</p>
            <p>- Te vei folosi de imaginatia ta pentru a crea o alta realitate care sa iti aduca bucurie si pace;</p>
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
                Acest program este gandit si construit astfel incat tu sa te poti elibera de sentimentul anxietatii si sa te poti reconecta la starea de bucurie
                si de bine.
              </p>
              <p>
                Am inceput sa experimentez starea de anxietate inca de mic copil insa doar de cativa ani mi-am dat seama cat de mult ma afecteaza la nivel
                energetic dar si la nivel fizic, experimentand diverse dureri in corpul fizic.
              </p>
              <p>
                Anul acesta am realizat ca corpul meu este dependent de anumite substante chimice care se creeaza in momentul in care simt anxietate. Desi
                incercam sa vindec efectele anxietatii, am inteles ca vindecarea trebuie sa realizeze in momentul in care aceasta s-a creat pentru prima data.
                Mai mult, trebuia sa imi invat corpul si mintea cum se simte sa traiasca fara anxietate si fara substantele chimice care se eliminau si cum sa
                se concentreze asupra unui viitor care imi aduce pace (avand in vedere ca anxietatea fiind cea care se asociaza cu grijile legate de viitor).
              </p>
              <p>Am realizat toate acestea prin intermediul meditatiei ghidate combinate cu tehnica ThetaHealing.</p>
              <p>
                In acest mod am creat o serie de meditatii care sa te ajute sa vindeci momentul in care ai simtit anxietate pentru prima data, intelegand ca
                aceasta este doar o senzatie si un comportament pe care l-ai invatat si care poate fi vindecat, urmate apoi de descarcari in mintea subcontienta
                a unor noi comportamente care sa te invete cum se simte si ca este posibil sa traiesti fara anxietate. Vom crea apoi o noua realitate prin
                intermediul imaginatiei care sa fie lipsita de anxietate si plina de liniste si bucurie. In final ne vom antrena sa ramanem concentrati asupra
                noii realitati prin intermediul recunostintei.
              </p>
            </div>

            <h2>Cum se desfasoara?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                  <p className="first-ul">Prin 5 meditatii ghidate pe care le vei face in ritmul tau.</p>
                  <ul>
                    <li>
                      <span>Meditatie 1:</span> Curatarea energetica a corpului si spatiului in care locuiesti
                    </li>
                    <li>
                      <span>Meditatie 2:</span> Vindecarea momentului in care a aparut anxietatea
                    </li>
                    <li>
                      <span>Meditatie 3:</span> Invatam corpul si mintea cum se simte sa traiasca fara anxietate
                    </li>
                    <li>
                      <span>Meditatie 4:</span> Crearea unui nou viitor prin intermediul imaginatiei
                    </li>
                    <li>
                      <span>Meditatia 5:</span> Concentrarea asupra noului viitor prin intermediul recunostintei
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Ce include?</h2>
            <div className="text-align-center">
              <div className="center-but-left">
                <div className="standard-text">
                  <p>- 1 sesiune initiala online si live in care vom povesti despre program si voi raspunde la intrebarile tale;</p>
                  <p>- 5 meditatii ghidate (intre 20 si 30 de minute fiecare) pe care le vei face in ritmul tau si in linistea casei tale;</p>
                  <p>- acces la acest program pe viata;</p>
                  <p>- sustinerea mea pe tot parcursul programului;</p>
                  <p>- acces la un grup exclusiv pe Facebook in care vei putea impartasi cu ceilalti participanti si aprofunda subiectele.</p>
                </div>
              </div>
            </div>

            <div className="flex-center mt45px">
              <button className="violet-btn">VREAU SI EU</button>
            </div>
          </div>
        </section>
        <section className="anxietate5">
          <div className="flex-anxi5 anxi-container">
            <div className="flex-anxi5-img-parent">
              <img src="a1-1.jpg" alt="mihaela maierean" />
            </div>

            <div className="anxi5-text">
              <p>Facilitatoare Meditatie</p>
              <h2>Mihaela Maierean</h2>
              <p className="text-align-justify standard-text">
                Trainer, terapeut practicant de terapie ThetaHealing si fondatoarea Sesiunilor de Manifestare Constienta si a Comunitatii Gandurilor Pozitive.
                Are mai bine de 5 ani de experienta in lucrul cu oamenii. Este pasionata de meditatie si dezvoltare spirituala. De mai bine de un an organizeaza
                meditatii ghidate online pe diferite teme. Prin terapiile pe care le face ea ajuta oamenii sa isi identifice si sa isi elibereze fricile si
                blocajele mentale care le limiteaza viata de zi cu zi si sa isi descopere puterea personala folosind propriile lor resurse.
              </p>
              <div className="mt35px center-on-m">
                <button className="violet-btn">Mai mult despre Mihaela</button>
              </div>
            </div>
          </div>
        </section>
        <section className="anxietate6">
          <h1 className="anxi6-title text-align-center">Intrebari frecvente</h1>
          <div className="anxi-questions anxi-container">
            <Question
              question="Cand se desfasoara acest program?"
              answer="Acest program se desfasoara in perioada 30 Noiembrie - 5 Decembrie

              Locatie: Online"
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
        <section className="anxietate7">
          <div className="anxi-container7">
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100}>
              <div>
                <img src="t1.jpg" alt="test" />
                <div className="myCarousel">
                  <h3>Elena V.</h3>
                  <h4>Medic</h4>
                  <p>
                    O voce blândă, un suflet cald și vesel... Imediat găsește cuvintele potrivite și te încurajează. Terapia cu Mihaela este ceva extraordinar,
                    imediat simți că ești muuult mai bine decât înainte. O recomand din tot sufletul. Este minunată!
                  </p>
                </div>
              </div>

              <div>
                <img src="t3.jpg" alt="test" />
                <div className="myCarousel">
                  <h3>Bianca M.</h3>
                  <h4>Ilustratoare</h4>
                  <p>
                    Un suflet bun, o energie pozitiva, un zambet cald, o persoana minunata care iti schimba perspectiva asupra vietii! Ai reusit sa faci un om
                    fericit! Multumesc, Mihaela!
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="anxietate8">
          <h2 className="text-align-center">Investitie:</h2>
          <div className="text-align-center">
            <div className="center-but-left">
              <div className="standard-text">
                <p>
                  <span>EARLY BIRD</span>
                  <strong> 77 RON</strong> pana pe 22 noiembrie.
                </p>
                <p>
                  <span>Investitia integrala</span>
                  <strong> 99 RON</strong> pana pe 27 noiembrie.{" "}
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
          <h2>Elibereaza-te de Anxietate!</h2>
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
        <section className="anxietate10">

                <img src="bani-sticker.svg" alt="retur"/>
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
