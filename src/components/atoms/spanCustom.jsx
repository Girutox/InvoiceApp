const SpanCustom = (props) => {
  return <span onClick={props.onClick} className={props.className}>{props.children}</span>;
};

export default SpanCustom;
