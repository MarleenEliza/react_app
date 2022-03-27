import IconButton from "components/IconButton";
import classes from "components/Header.module.scss";
import { useState } from "react";

const name = "Button";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className={classes.preview_title}>
      <h1>{name}</h1>
      <IconButton
        tooltip="Toggle component visibility in library"
        path={`visibility-${isVisible ? "visible" : "hidden"}`}
        onClick={visibilityHandler}
      />
      <IconButton tooltip="Component settings" path="gear" />
    </header>
  );
}

export default Header;
