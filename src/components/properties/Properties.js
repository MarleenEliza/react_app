import iconPlus from "assets/icons/plus icon.svg";
import Property from "components/properties/Property";
import classes from "./Properties.module.scss";
import properties from "library/properties";

function Properties() {
  const addPropertyHandler = () => {
    console.log("clicked");
  };

  return (
    <section className={classes.properties}>
      <h2 className={classes.title}>
        Properties
        <button onClick={addPropertyHandler} className={classes.add_button}>
          <img src={iconPlus} alt="icon plus" />
          Add new Property
        </button>
      </h2>

      <ul className={classes.properties_list}>
        {properties.map((property, index) => (
          <Property key={index} {...property}></Property>
        ))}
      </ul>
    </section>
  );
}

export default Properties;
