import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <>
      <div className="flex-this-cards">
        <TestimonialCard
          src="woman1s.png"
          text="Dumnezeu lucrează prin oameni și a știut cel mai bine pe cine să-mi trimită pentru a medita. Mihaela, tu ești omul care-mi face muuult bine!
          Mă bucur din tot sufletul că te-am întâlnit, chiar și în mediul online.
          Ești specială!❤"
          nume="Cornelia C. - Profesoară"
        />
        <TestimonialCard
          src="man1s.png"
          text="Mihaela m-a ajutat foarte mult într-o perioadă în care nu știam ce îi cu mine și nu știam de ce mă simt rău și încătușat. 
          Ședințele cu ea mi-au arătat gânduri ascunse ale mele de care fie fugeam, fie nu știam că le am și care să mă afectau în egală măsură.
           "
          nume="Florin F. – Informatician "
        />
        <TestimonialCard
          src="woman2s.png"
          text="O voce blândă, un suflet cald și vesel. Imediat găsește cuvintele potrivite și te încurajează. Terapia cu Mihaela  este ceva extraordinar, imediat simți că ești muuult mai bine decât înainte. O recomand din tot sufletul. Este minunată! 🙏"
          nume="Elena V. - Medic"
        />
      </div>
    </>
  );
}
