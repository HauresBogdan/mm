export default function SmallDivider2(props) {
    return (
      <>
        <div className="small-divider2">
            <p className="sd2-first">{props.header}</p>
            <p className="sd2-second">{props.text}</p>
        </div>
      </>
    );
  }
  