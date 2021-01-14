import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <>
     <h1 className="testimoniale-title">Testimoniale</h1>
      <div className="flex-this-cards">
       
        <TestimonialCard
        src="woman3s.jpg"
        text="Sesiunile de terapie Theta m-au ajutat să-mi depășesc multe din fricile și limitările minții. Sunt recunoscătoare pentru că am ocazia să fiu ghidată de Maie în procesul de vindecare a unor probleme de sănătate deoarece este o persoană calmă și răbdătoare, îmi conferă siguranța de a fi vulnerabilă și astfel să ajungem la baza unor convingeri adânc înrădăcinate. Deși nu este întotdeauna ușor sau comod ea știe cum să abordeze lucrurile și astfel după fiecare sesiune mă simt mereu eliberată și plină de speranță. Recomand cu căldură și încredere terapia Theta alături de Maie!"
        nume="Bianca Moldoveanu – Ilustratoare"
      />
        <TestimonialCard
          src="man1s.png"
          text="Mihaela m-a ajutat foarte mult într-o perioadă în care nu știam ce îi cu mine și nu știam de ce mă simt rău și încătușat. 
          Ședințele cu ea mi-au arătat gânduri ascunse ale mele de care fie fugeam, fie nu știam că le am și care să mă afectau în egală măsură. 
          Continui să practic ceea ce am învățat de la ședințele cu ea și mă ajut de ele în fiecare zi, evitând astfel să cad în aceleași capcane 
          mentale care mi-au făcut rău atâta timp. După ședințele de Theta mă simțeam întotdeauna mai liniștit, mai împăcat cu mine, dar și mai energic 
          și mai dornic să îmi schimb acele lucruri din viață care mă trăgeau în jos. Dacă consideri că ești pe o pantă descendentă în viață ta și că abia
           reușești să te motivezi de la o zi la altă, ședințele de Theta cu Mihaela te vor ajută să îți găsești sacul de energie de care ai nevoie pentru
            ati ridica starea la noi nivele. 
           "
          nume="Florin F. – Informatician "
        />
        <TestimonialCard
          src="woman2s.png"
          text="O voce blândă, un suflet cald și vesel. Imediat găsește cuvintele potrivite și te încurajează. Terapia cu Mihaela este ceva extraordinar, imediat simți că ești muuult mai bine decât înainte. O recomand din tot sufletul. Este minunată! 🙏"
          nume="Elena V. - Medic"
        />
         <TestimonialCard
          src="woman1s.png"
          text="Dumnezeu lucrează prin oameni și a știut cel mai bine pe cine să-mi trimită pentru a medita. Mihaela, tu ești omul care-mi face muuult bine!
          Mă bucur din tot sufletul că te-am întâlnit, chiar și în mediul online.
          Ești specială!❤"
          nume="Cornelia C. - Profesoară"
        />
       
        <TestimonialCard
          src="man2s.png"
          text="Am mers fără așteptări și Mihaela m-a ajutat să mă descopăr și mai mult prin Theta Healing. Am rămas chiar impresionat de aceste ședințe fiindcă m-a ajutat să dizolv unele energii din mine și din jurul meu, de care nu mai aveam nevoie. Mulțumesc Mihaela 🙏"
          nume="Alexandru Maricoiu - Informatician"
        />
      </div>
    </>
  );
}
