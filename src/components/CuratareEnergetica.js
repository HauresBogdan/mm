import { Link } from "react-router-dom";

export default function CuratareEnergetica() {
  return (
    <>
      <div className="curatare-energetica">
        <img src="cesat2.jpg" alt="curatare energetica" />
        <div className="mask-ce"></div>
        <div className="curatare-e-text">
          <h1>Curatare energetică</h1>
          <p>Reconectează-te la energia ta și a Universului</p>
          <p>
           Eliberează-te de stări care nu îți apartin
          </p>
          <p>Adu inspirația și creativitatea în spațiul în care locuiești</p>
          <button className="violet-btn" ><Link className="footer-contact-link" to="/Curatare">Vreau Și Eu</Link></button>
        </div>
        
      </div>
    </>
  );
}
