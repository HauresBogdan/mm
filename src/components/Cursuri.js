import classNames from "classnames";
import {useState} from "react";

export default function Cursuri() {
  const [isHover,setIsHover] = useState(false);
  const [isHover2,setIsHover2] = useState(false);
  return (
    <>
      <div className="cursuri">
        <div className="container-and-flex-cursuri">
          <div className={classNames("cursuri1","theta-img",{"add-to-hover-cursuri": isHover})} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <img src="curs1.svg" alt="curs1" /> 
            <h3>Sesiuni de Manifestare Conștientă</h3>
            <p>18-28 Ianuarie</p>
            <p><small>Live Online</small></p>
            <button className="violet-btn">Înscriere</button>
          </div>
          <div className={classNames("cursuri2","theta-img",{"add-to-hover-cursuri": isHover2})} onMouseEnter={()=>setIsHover2(true)} onMouseLeave={()=>setIsHover2(false)}>
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
