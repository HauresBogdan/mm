import { Link } from "react-router-dom";

export default function SmallDivider() {
  return (
    <>
      <div className="small-divider">
        <div className="container-sd">
          <div className="left-flex">
          <h4>Te salut cu bucurie!</h4>
          <p className="sd-first">Vrei să știi cum se simte să fii fericit, abundent și sănătos în fiecare moment al vieții tale?</p>
          </div>         
          <div className="sd-second">
            <button className="violet-btn extra-padding1"><Link className="footer-contact-link" to="/ThetaHealing"> Descoperă magia Thetahealing-ului!</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}
