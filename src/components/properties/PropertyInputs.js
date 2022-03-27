import classes from "./Properties.module.scss";

export function TextInput(props) {
  return (
    <input
      className={classes.text_input}
      type="text"
      id="key"
      value={props.value}
    />
  );
}

export function TextArea(props) {
  return (
    <textarea
      className={classes.text_area}
      type="text"
      id="key"
      value={props.value}
    ></textarea>
  );
}

export function BooleanInput(props) {
  return (
    <div>
      <input type="checkbox" id="key" value={props.value}></input>
      <label> {props.value} </label>
    </div>
  );
}

export function SelectInput(props) {
  return (
    <select className={classes.select_input} id="key" value={props.value}>
      {props.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
