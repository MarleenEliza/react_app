import iconPlus from "assets/icons/plus icon.svg";
import classes from "./Properties.module.scss";
import properties from "library/properties";

function Property(props) {
  const addPropertyHandler = () => {
    console.log("clicked");
  };

  return (
    <li className={classes.property}>
      <h3>{props.property_name}</h3>
    </li>
  );
}

export default Property;
