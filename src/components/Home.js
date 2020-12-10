import classNames from "classnames";
import Mediwiki from "./Mediwiki";
import SmallDivider from "./SmallDivider";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <section className={classNames("main2")}>
        <div className="sliding-img-parent">
          <div className="sliding-img">
            <img className="main-croped-img" src="2.png" alt="thetahealing" />
            <div className="mask"></div>
            <p>Reconectează&#8209;te cu pacea din interior!</p>
            <span className="semnatura">cu Mihaela Maierean</span>
          </div>
        </div>
      </section>

      <SmallDivider />
      <Mediwiki />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
