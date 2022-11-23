import React from "react";
import style from "./sidebar.module.scss";
import Searchbar from "../base/searchbar";
import Navigation from "./navigation";
import Projects_side_block from "./projects_side_block";
import { Logo_block } from "./logo_block";


const Sidebar = (): JSX.Element => {
  return (
    <aside className={style.sidebar}>
      <Logo_block/>
      <Searchbar />
      <Navigation />
      <Projects_side_block/>
      
    </aside>
  );
}

export default Sidebar;
