import { ThemeProvider, useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false)

// useEffect(() => {
//   setMounted(true)
// },[])

// if (!mounted) {
//   return null;
// }

  return (
    <div>
      {/* //TODO: make toggle button with icon  */}
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
    </div>
  );
};

export default ThemeChanger;
