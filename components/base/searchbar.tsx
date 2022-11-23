import React from "react";
import style from "./searchbar.module.scss";
import cn from "classnames";

function Searchbar() {
  return (
    <form action="#" className={style.search}>
      <input
        className={cn(style.input)}
        type="search"
        placeholder="Search..."
      />
    </form>
  );
}

export default Searchbar;
