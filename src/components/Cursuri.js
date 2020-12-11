
export default function Cursuri() {
 
  return (
    <>
      <div className="cursuri">
        <div className="container-and-flex-cursuri">
          <div className="cursuri1">
            <img src="curs1.svg" alt="curs1" /> 
            <h3>Sesiuni de Manifestare Conștientă</h3>
            <p>18-28 Ianuarie</p>
            <p><small>Live Online</small></p>
            <button className="violet-btn">Înscriere</button>
          </div>
          <hr className="cursuri-hr"/>
          <div className="cursuri2">
            <img src="curs2.svg" alt="curs2" /> 
            <h3>Eliberare de Anxietate</h3>
            <p>1-6 Februarie</p>
            <p><small>Preînregist</small></p>
            <button className="violet-btn">Înscriere</button>
          </div>
        </div>
      </div>
    </>
  );
}
