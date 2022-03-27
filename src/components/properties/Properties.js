import iconPlus from "assets/icons/plus icon.svg";
import classes from "./Properties.module.scss";

function Properties() {
  const addPropertyHandler = () => {
    console.log("clicked");
  };

  return (
    <section className={classes.properties}>
      <h2>Properties</h2>
      <button onClick={addPropertyHandler} className={classes.add_button}>
        <img src={iconPlus} alt="icon plus" />
        Add new Property
      </button>
    </section>
  );
}

export default Properties;
