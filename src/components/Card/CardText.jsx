const CardText = (props) => {
  return <p className={`card-text ${props.class}`}>{props.text}</p>;
}

export default CardText;
