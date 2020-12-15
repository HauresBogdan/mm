import className from 'classnames';
import {useState} from "react";

export default function PriceCard(props) {

  const [isHovering,setIsHovering] = useState(false);
  return (
    <>
      <div className={className("price-card", {'extra-shadow2': isHovering})} onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
       <div className="price-card-shelf" style={{background:`${props.bgcolor}`,color:`${props.textcolor}`}}>{props.pach}</div>
       <div className="price-card-shelf">Aproximativ {props.time}h</div>
       <div className="price-card-shelf">{props.nrsesions} Ședinte</div>
       <div className="price-card-shelf">Tip Ședinta "Zoom Call"</div>
       <div className="price-card-shelf">Confidențialitate 100%</div>
       <div className="price-card-shelf">{props.price} RON</div>
       <div className="price-card-shelf"><button className="violet-btn">Programare</button></div>
      </div>
    </>
  );
}
