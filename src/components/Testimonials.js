import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <>
      <div className="flex-this-cards">
        <TestimonialCard src="t1.jpg" text="La început eram sceptică dar am rămas surprinsă când am început să văd schimbări în viața mea de zi cu zi." nume="Andrea Rea"/>
        <TestimonialCard src="t2.jpg" text="Mihaela ma ajutat să imi schimb complet percepția despre viață înspre bine. Acuma sunt mai optimist și plin de viață." nume="Paul Andrei"/>
        <TestimonialCard src="t3.jpg" text="Eu am reușit să mă las de fumat cu câteva sesiuni. Wow! Nici măcar nu mai simt nevoia să fumez acum." nume="Anca Sandu"/>
      </div>
    </>
  );
}
