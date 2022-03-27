import classes from "./Properties.module.scss";
import IconButton from "components/IconButton";
import PropertyForm from "components/properties/PropertyForm";
import { useState } from "react";

function Property(props) {
  const [isVisible, setIsVisible] = useState(props.is_visible);
  const [isEditing, setIsEditing] = useState(false);

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };
  const editHandler = () => {
    setIsEditing(!isEditing);
  };
  return (
    <li className={`${classes.property} ${isVisible ? "" : "disabled"}`}>
      <div className={classes.actions}>
        <h3>{props.property_name} </h3>
        <IconButton
          path={`visibility-${isVisible ? "visible" : "hidden"}`}
          onClick={visibilityHandler}
        />
        <IconButton tooltip="Delete property" path="trash" />
      </div>
      {isEditing && <PropertyForm {...props} />}

      <IconButton
        path={`${isEditing ? "action-close" : "plus"}`}
        onClick={editHandler}
      />
    </li>
  );
}

export default Property;
