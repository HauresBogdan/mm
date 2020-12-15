import {useState} from "react";
import classNames from "classnames";

export default function Question(params) {
  const [showAnswer,SetShowAnswer] = useState(params.showing ? true : false );
 
  return (
    <>
      <div className="question">
        <h2 onClick={()=>SetShowAnswer(!showAnswer)}><img className="plus-icon" src={showAnswer ? "minus.svg" :"plus2.svg"} alt="plus"/> {params.question}</h2>
        <div className={classNames("answer", {'show-answer' : showAnswer})}>        
          <p>{params.answer}</p>
        </div>
      </div>
    </>
  );
}
