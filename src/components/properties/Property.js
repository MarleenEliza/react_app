import classes from "./Properties.module.scss";
import IconButton from "components/IconButton";
import {
  defaultPropMap,
  propertyTypeMap,
  propertyControlMap,
} from "library/propertySettings";
import { TextArea } from "./PropertyInputs";
import { useState } from "react";

// DynamicComponent is a component that renders a component based on the component prop of one of the Maps of propertySettings.
// It is used to dynamically render properties for the user to set based on the property type and property control.
// The components themselves can be found in 'components/properties/PropertyInputs.js'
function Property(props) {
  const [isVisible, setIsVisible] = useState(props.is_visible);
  const [isEditing, setIsEditing] = useState(false);

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };
  const editHandler = () => {
    setIsEditing(!isEditing);
  };
  const propertyTypeValue =
    propertyTypeMap.get(props.property_type) ?? propertyTypeMap.get("default");

  const propertyControlValue = propertyControlMap.get(props.property_control);

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
      {isEditing && (
        <form className={classes.form}>
          {[...defaultPropMap.keys()].map((key) => (
            <DynamicComponent
              key={key}
              propKey={key}
              value={props[key]}
              {...defaultPropMap.get(key)}
            ></DynamicComponent>
          ))}
          {props["property_control"] && (
            <DynamicComponent
              className="property_control"
              {...propertyTypeValue}
              value={props[propertyTypeValue.valueKey]}
              propKey="property_control"
            ></DynamicComponent>
          )}
          {props["options"] && (
            <DynamicComponent
              component={TextArea}
              value={props["options"].join(",")}
              propKey="options"
            ></DynamicComponent>
          )}
          {propertyControlValue && (
            <DynamicComponent
              {...propertyControlValue}
              options={props[propertyControlValue.optionsKey]}
            ></DynamicComponent>
          )}
        </form>
      )}

      <IconButton
        path={`${isEditing ? "action-close" : "plus"}`}
        onClick={editHandler}
      />
    </li>
  );
}

function DynamicComponent(props) {
  const Component = props.component;
  return (
    <div className={classes.property_item}>
      <label>{props.propKey?.replace("_", " ")}</label>
      <Component {...props} />
    </div>
  );
}
export default Property;
