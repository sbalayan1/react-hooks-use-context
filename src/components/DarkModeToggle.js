import React, { useContext } from "react";
import {ThemeContext} from '../context/theme'


function DarkModeToggle() {
  const {theme, handleToggleTheme} = useContext(ThemeContext)

  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
