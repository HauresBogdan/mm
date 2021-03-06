import Footer from "./Footer";
import "../sidepagecss/thetahealing.css";
import "../sidepagecss/curatare.css";
// import PriceCard from "./PriceCard";
import className from 'classnames';
import {useState} from "react";
import { InlineWidget, openPopupWidget } from "react-calendly";

function Curatare({ url, prefill, pageSettings, utm }) {
  const [isHovering,setIsHovering] = useState(false);

  url="https://calendly.com/mihaelamaiereantheta/curatareenergetica";

    function openCalendlyPopup() {
      openPopupWidget({ url, prefill, pageSettings, utm });
    } 

    
   
    
  

  return (
    <>
      <section className="th-sec">
        <div className="th-banner">
          <h1 className="th-container">Curățare energetică</h1>
        </div>
        <section className="thp-hero">
          <div className="c-main1 ">
            <div className="cmain1">
              <img className="icon2" src="icon3.png" alt="gld" />
              <h2>Vrei să știi cum se simte să fii conectat doar la energia ta?</h2>
              <div className="c-container">
                <p>Prin curățare energetică se înțelege eliberarea și trimiterea în lumină Divină a energiilor de vibrație joasă.</p>
                <p>
                  Energiile de vibrație joasă pot fi experimentate atât în spațiile în care ne petrecem timpul (casă, birou etc.), dar cel mai frecvent le
                  simțim în câmpul nostru energetic.
                </p>
                <p>
                  O bună parte dintre aceste energii sunt preluate în viața de zi cu zi atunci când nu suntem centrați în momentul prezent. (ex: mergi pe
                  stradă, auzi pe cineva care se ceartă iar tu integrezi tensiunea acelui eveniment într-un mod inconștient).
                </p>
              </div>

              <div className="center">
                {/* <button className="violet-btn mt1"><a className="footer-contact-link" href="https://calendly.com/mihaelamaiereantheta/curatareenergetica">Programează o ședință</a></button> */}
                <button className="violet-btn mt1" onClick={openCalendlyPopup}>Programează o ședință</button>
                
              </div>
            </div>
          </div>
         
        </section>
      </section>

      <section className="thp-hero c-bimage">
        <div className="c-text">
          <p>Reconectează-te la energia ta și a Universului</p>
          <p>Eliberează-te de stări care nu îți apartin</p>
          <p>Adu inspirația și creativitatea în spațiul în care locuiești</p>
        </div>
      </section>

      <section className="th-sec2 thp-hero">
        {/* <div className="th-banner ">
          <h1 className="th-container">Alungă energiile negative</h1>
        </div> */}

        <div className="flex-this-c-sec2">
          <div className="text">
            <p>
              Spațiile acumulează de asemenea energii, de la vechii proprietari sau persoane care au trecut prin acele locuri. Cel mai interesant mix de energii
              se află în spațiile în care fluxul de persoane este ridicat.
            </p>
            <p>
              În acest proces de curățare energetică eu voi facilita curațarea spațiilor și a persoanelor pe care tu le dorești. Apoi vom descărca o serie de
              sentimente pe care vrei să le experimentezi în acele locuri sau de la acele persoane.
            </p>
            <p>După finalizarea procesului vei avea un sentiment de eliberare și armonie. Vei simți o stare de confort și liniște oriunde te-ai afla.</p>
          </div>

          <div className="c-price-card">
            {/* <PriceCard pach="CURĂȚARE ENERGETICĂ" bgcolor="#ddc32c" textcolor="black" time="40" nrsesions="1" price="99" /> */}
            <div className={className("price-card", {'extra-shadow2': isHovering})} onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
       {/* <div className="price-card-shelf" style={{background:`${props.bgcolor}`,color:`${props.textcolor}`}}>{props.pach}</div> */}
       {/* <div className="price-card-shelf">Aproximativ {props.time}min</div> */}
       <div className="price-card-shelf">1 Sesiune</div>
    
       <div className="price-card-shelf">99 RON</div>
       <div className="price-card-shelf"><button className="violet-btn"><a className="footer-contact-link" href="https://calendly.com/mihaelamaiereantheta/curatareenergetica">Cumpără</a></button></div>
       
      </div>
          </div>
        </div>
        <InlineWidget url="https://calendly.com/mihaelamaiereantheta/curatareenergetica" styles={{
  height: '1000px'
}}/>
        <p className="info-price-card">*Ședința durează 40 de minute și se realizează pe Zoom. Confidențialitatea este garantată!</p>
      </section>

      <Footer />
    </>
  );
}
export default Curatare;
