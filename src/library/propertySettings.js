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
