import classes from "components/IconButton.module.scss";

function IconButton(props) {
  return (
    <button onClick={props.onClick}>
      <img
        src={require(`assets/icons/${props.path}.svg`)}
        alt={`${props.alt ?? props.path} icon`}
      />
      <span className={classes.tooltip}>{props.tooltip}</span>
    </button>
  );
}

export default IconButton;
