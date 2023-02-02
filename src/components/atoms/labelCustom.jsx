const LabelCustom = (props) => {
  return (
    <label className="body1 color-secondary-3" htmlFor={props.controlId}>
      {props.children}
    </label>
  );
};

export default LabelCustom;
