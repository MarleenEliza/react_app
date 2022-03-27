import classes from "./Properties.module.scss";

export function TextInput(props) {
  return (
    <input
      className={classes.text_input}
      type="text"
      key={props.propKey}
      name={props.propKey}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export function TextArea(props) {
  return (
    <textarea
      className={classes.text_area}
      type="text"
      name={props.propKey}
      value={props.value}
      onChange={props.onChange}
    ></textarea>
  );
}

export function BooleanInput(props) {
  return (
    <input
      className={classes.boolean_input}
      type="checkbox"
      name={props.propKey}
      checked={props.value}
      onChange={props.onChange}
    ></input>
  );
}

export function SelectInput(props) {
  return (
    <select
      className={classes.select_input}
      name={props.propKey}
      onChange={props.onChange}
      value={props.value}
    >
      {props.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
