import { useTheme } from "next-themes";
import React from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {/* //TODO: make toggle button with icon  */}
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
    </div>
  );
};

export default ThemeChanger;
