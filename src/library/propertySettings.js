import {
  TextInput,
  BooleanInput,
  SelectInput,
  TextArea,
} from "components/properties/PropertyInputs";

export const defaultPropMap = new Map([
  [
    "property_name",
    {
      component: TextInput,
      annotation: "name of the proerty given in code",
    },
  ],
  [
    "display_name",
    {
      component: TextInput,
    },
  ],
  [
    "description",
    {
      component: TextArea,
    },
  ],
  [
    "property_type",
    {
      component: SelectInput,
      options: ["one of", "node", "boolean"],
      annotation:
        "type of control displayed in editor's properties panel.  Learn more about control types",
    },
  ],
]);

export const propertyTypeMap = new Map([
  [
    "boolean",
    {
      component: BooleanInput,
      valueKey: "default_value",
    },
  ],
  [
    "default",
    {
      component: SelectInput,
      options: ["textarea", "select"],
      valueKey: "property_control",
    },
  ],
]);

export const propertyControlMap = new Map([
  [
    "select",
    {
      component: SelectInput,
      optionsKey: "options",
      valueKey: "default_value",
    },
  ],
]);
