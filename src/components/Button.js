const sizeMap = {
  small: {
    fontSize: "0.8rem",
    padding: "0.5rem 1rem",
  },
  medium: {
    fontSize: "1rem",
    padding: "0.5rem 1rem",
  },
  large: {
    fontSize: "1.2rem",
    padding: "0.8rem 1rem",
  },
  default: {
    fontSize: "ineherit",
    padding: "0.5rem 1rem",
  },
};

function Button(props) {
  const style = {
    width: props.fullWidth ? "100%" : "auto",
    fontSize: sizeMap[props.size]
      ? sizeMap[props.size].fontSize
      : sizeMap.default.fontSize,
    padding: sizeMap[props.size]
      ? sizeMap[props.size].padding
      : sizeMap.default.padding,
    borderRadius: props.borderRadius ? props.borderRadius : "0.2rem",
  };
  return (
    <button style={style} className={`${props.variant} ${props.color}`}>
      Sign up
    </button>
  );
}

export default Button;
