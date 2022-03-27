import classes from "components/IconButton.module.scss";

function IconButton(props) {
  return (
    <button>
      <img
        src={require(`assets/icons/${props.path}.svg`)}
        alt="dynamic button"
      />
      <span className={classes.tooltip}>{props.tooltip}</span>
    </button>
  );
}

export default IconButton;
