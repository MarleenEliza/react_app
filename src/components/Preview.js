import IconButton from "components/IconButton";
import classes from "components/Preview.module.scss";

const name = "button";

function Preview() {
  return (
    <p className={classes.preview_title}>
      <h1>{name}</h1>
      <IconButton
        tooltip="Toggle component visibility in library"
        path="visibility-visible"
      />
      <IconButton tooltip="Component settings" path="gear" />
    </p>
  );
}

export default Preview;
