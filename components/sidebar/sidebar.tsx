import React from "react";
import style from "./sidebar.module.scss";
import Navigation from "./navigation/navigation";
import ProjectsSideBlock from "./projects_side_block/projects_side_block";
import { Logo_block } from "./logo_block";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNotificationsActive, MdOutlineHelpCenter } from "react-icons/md";
import SidebarLink from "./sidebar_link/sidebar_link";
import Divider from "../base/divider";
import UserBlock from "./user_block/user_block";

const Sidebar = (): JSX.Element => {
  const toogleSideBar = () => {};
  return (
    <aside className={style.sidebar}>
      <GiHamburgerMenu className={style.menu__icon} onClick={toogleSideBar} />
      <Logo_block />
      {/* <Searchbar /> */}
      <Navigation className={style.sidebar__nav}/>
      <ProjectsSideBlock className={style.sidebar__projectsBlock}/>
      <div className="utilities">
        <SidebarLink href="/notifications" name="Notifications" icon={<MdOutlineNotificationsActive />} />
        <SidebarLink href="/help" name="Help" icon={<MdOutlineHelpCenter />} />
      </div>

      <Divider/>
      <UserBlock/>
    </aside>
  );
};

export default Sidebar;
