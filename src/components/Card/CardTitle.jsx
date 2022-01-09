const CardTitle = (props) => {
  return <h5 className={`card-title ${props.class}`} > {props.text}</h5 >;
}

export default CardTitle;
