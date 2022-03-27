import classes from "components/properties/PropertyForm.module.scss";
import { useState } from "react";
import {
  defaultPropMap,
  propertyTypeMap,
  propertyControlMap,
} from "library/propertySettings";
import { TextArea } from "./PropertyInputs";

// DynamicComponent is a component that renders a component based on the component prop of one of the Maps of propertySettings.
// It is used to dynamically render properties for the user to set based on the property type and property control.
// The components themselves can be found in 'components/properties/PropertyInputs.js'
export function PropertyForm(props) {
  const [properties, setProperties] = useState({ ...props });
  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    const parsedValue =
      type === "checkbox"
        ? !properties[name]
        : name === "options"
        ? value.split(",")
        : value;
    setProperties({ ...properties, [name]: parsedValue });
  };
  const propertyTypeValue =
    propertyTypeMap.get(properties.property_type) ??
    propertyTypeMap.get("default");
  const propertyControlValue = propertyControlMap.get(
    properties.property_control
  );

  return (
    <form className={classes.form}>
      {[...defaultPropMap.keys()].map((key) => (
        <DynamicComponent
          key={key}
          propKey={key}
          value={properties[key]}
          {...defaultPropMap.get(key)}
          isNewForm={props.isNewForm}
          onChange={changeHandler}
        ></DynamicComponent>
      ))}
      {propertyTypeValue && (
        <DynamicComponent
          className="property_control"
          {...propertyTypeValue}
          value={properties[propertyTypeValue.valueKey]}
          propKey={propertyTypeValue.valueKey}
          onChange={changeHandler}
        ></DynamicComponent>
      )}
      {properties["options"] && (
        <DynamicComponent
          component={TextArea}
          value={properties["options"].join(",")}
          propKey="options"
          annotation="list options separared by comma"
          onChange={changeHandler}
        ></DynamicComponent>
      )}
      {propertyControlValue && (
        <DynamicComponent
          {...propertyControlValue}
          propKey={propertyControlValue.valueKey}
          options={properties[propertyControlValue.optionsKey]}
          onChange={changeHandler}
        ></DynamicComponent>
      )}
    </form>
  );
}

function DynamicComponent(props) {
  const Component = props.component;
  return (
    <div
      className={`${classes.property_item} ${
        Component === TextArea ? classes.block : ""
      }`}
    >
      <label>{props.propKey?.replace("_", " ")}</label>
      <Component onChange={props.onChange} {...props}></Component>
      {(props.isNewForm || props.propKey === "options") && props.annotation && (
        <small>({props.annotation})</small>
      )}
    </div>
  );
}
export default PropertyForm;
