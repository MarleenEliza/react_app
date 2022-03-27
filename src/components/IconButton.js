import classes from "components/IconButton.module.scss";

function IconButton(props) {
  return (
    <button className={classes.icon_button} onClick={props.onClick}>
      <img
        src={require(`assets/icons/${props.path}.svg`)}
        alt={`${props.alt ?? props.path} icon`}
      />
      {props.tooltip && (
        <span className={classes.tooltip}>{props.tooltip}</span>
      )}
    </button>
  );
}

export default IconButton;
