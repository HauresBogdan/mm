import className from 'classnames';
import {useState} from "react";

export default function TestimonialCard(props) {

  const [isHovering,setIsHovering] = useState(false);
  return (
    <>
      <div className={className("testimonial-card", {'extra-shadow': isHovering})} onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
        <img className="test-avatar" src={props.src} alt="testimonial-avatar" />
        <div className="text">
          <span><img className="start-quote" src='start-quote.svg' alt='quote'/></span>
          <p>{props.text}</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="test-name">{props.nume}</p>
        </div>
      </div>
    </>
  );
}
