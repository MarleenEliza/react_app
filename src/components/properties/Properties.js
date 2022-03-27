import iconPlus from "assets/icons/plus icon.svg";
import Property from "components/properties/Property";
import PropertyForm from "components/properties/PropertyForm";
import classes from "components/properties/Properties.module.scss";

import properties from "library/properties";
import { defaultPropMap } from "library/propertySettings";

import { useState } from "react";

function Properties() {
  const [isEditing, setIsEditing] = useState(false);
  const [newProperty, setNewProperty] = useState(
    [...defaultPropMap.keys()].reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );
  const newPropertyHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section className={classes.properties}>
      <h2 className={classes.title}>
        Properties
        <button onClick={newPropertyHandler} className={classes.add_button}>
          <img src={iconPlus} alt="icon plus" />
          Add new property
        </button>
      </h2>
      {isEditing && (
        <div className={classes.new_form}>
          <PropertyForm {...newProperty} isNewForm={true} />
          <div className={classes.action_buttons}>
            <button
              className="action_button  discard"
              onClick={newPropertyHandler}
            >
              Cancel
            </button>
            <button
              className="action_button  save"
              onClick={newPropertyHandler}
            >
              Add
            </button>
          </div>
        </div>
      )}
      <ul className={classes.properties_list}>
        {properties.map((property, index) => (
          <Property key={index} {...property}></Property>
        ))}
      </ul>
    </section>
  );
}

export default Properties;
