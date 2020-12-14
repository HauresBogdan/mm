export default function Question(params) {
  return (
    <>
      <div className="question">
        <h2>{params.question}</h2>
        <div className="answer">
          <p>{params.answer}</p>
        </div>
      </div>
    </>
  );
}
