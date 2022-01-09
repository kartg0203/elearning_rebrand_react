const Li = (props) => {
  return <li className={props.class}>{props.children}</li>;
};

// Li.defaultProps = {
//   listItem: "list-group-item"
// };

export default Li;
