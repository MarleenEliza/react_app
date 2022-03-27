import classes from "components/header/Header.module.scss";
import tileIcon from "assets/icons/layout-medium-tile-outline.svg";

function Header() {
  return (
    <header>
      <button className={classes.menu_button}>
        <img src={tileIcon} alt="menu button" />
      </button>
      <h4 className={classes.header_title}>
        Material UI / <strong>Button</strong>
      </h4>

      <button className={classes.discard_button}>Discard changes</button>
      <button className={classes.save_button}>Save changes</button>
    </header>
  );
}

export default Header;
