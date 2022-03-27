import classes from "components/topbar/TopBar.module.scss";
import IconButton from "components/IconButton";

function Header() {
  return (
    <header className={classes.top_bar}>
      <IconButton
        className={classes.menu_button}
        path="layout-medium-tile-outline"
        alt="menu"
        tooltip="Open Dashboard"
      />
      <h4 className={classes.header_title}>
        Material UI / <strong>Button</strong>
      </h4>

      <button className={classes.action_discard}>Discard changes</button>
      <button className={classes.action_save}>Save changes</button>
    </header>
  );
}

export default Header;
