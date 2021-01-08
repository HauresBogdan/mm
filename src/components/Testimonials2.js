import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Testimonials2() 
{
    return (
        <>
         <section className="anxietate7">
          <div className="anxi-container7">
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100}>
              <div>
                <img src="woman2s.png" alt="test" />
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
                <img src="woman1s.png" alt="test" />
                <div className="myCarousel">
                  <h3>Bianca M.</h3>
                  <h4>Ilustratoare</h4>
                  <p>
                  Un suflet bun, o energie pozitivă, un zâmbet cald, o persoană minunată care îți schimbă perspectiva asupra vieții! Ai reușit să faci un om 
                     fericit! Mulțumesc, Mihaela!
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
        </>
    );
}