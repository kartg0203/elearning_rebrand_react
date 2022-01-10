const Card = (props) => {
  return (
    <div className={`card ${props.cardClass}`}>
      <div className={`card-body ${props.bodyClass}`}>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
