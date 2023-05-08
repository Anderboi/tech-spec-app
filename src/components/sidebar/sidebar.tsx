import React from "react";
import style from "./sidebar.module.scss";
import MenuLayout from "./menuLayout/MenuLayout";
import { Logo_block } from "./LogoBlock";
import {
  MdOutlineNotificationsActive,
  MdOutlineHelpCenter,
} from "react-icons/md";
import SidebarLink from "./sidebar_link/SidebarLink";
import CustomDivider from "../base/divider/CustomDivider";
import UserBlock from "./user_block/user_block";
import { RiContactsLine, RiStackLine } from "react-icons/ri";
import { BsFillSquareFill } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { menuItem } from "../../types/nav_item";
import ThemeChanger from "../base/inputs/ThemeChanger";

const menuItems: menuItem[] = [
  {
    id: 1,
    name: "Projects",
    icon: <RiStackLine />,
    href: "/ProjectsPage",
  },
  {
    id: 2,
    name: "Contacts",
    icon: <RiContactsLine />,
    href: "/ContactsPage",
  },
];

const items = menuItems.map(({ href, icon, id, name }: menuItem) => {
  return <SidebarLink key={id} href={href} icon={icon} name={name} />;
});

const projects: menuItem[] = [
  {
    id: 1,
    name: "Test Project 01",
    icon: <BsFillSquareFill />,
    href: "/project01",
  },
];

const projectsList = projects.map(({ id, name, href, icon }: menuItem) => {
  return <SidebarLink href={href} icon={icon} name={name} key={id} />;
});

const helperItems: menuItem[] = [
  {
    id: 1,
    name: "Notifications",
    icon: <MdOutlineNotificationsActive />,
    href: "/notifications",
  },
  {
    id: 2,
    name: "Help",
    icon: <MdOutlineHelpCenter />,
    href: "/help",
  },
];

const helpers = helperItems.map(({ href, icon, id, name }: menuItem) => {
  return <SidebarLink key={id} href={href} icon={icon} name={name} />;
});

const Sidebar = (): JSX.Element => {
  return (
    <aside className={style.sidebar}>
      <Logo_block />
      <MenuLayout className={style.sidebar__nav}>{items}</MenuLayout>
      {/* <CustomDivider className={style.divider} /> */}

      <MenuLayout className={style.sidebar__projectsBlock}>
        <span className={style.sidebar__subheader}>Favourites</span>
        {projectsList}
        <span className={style.addLink}>
          <SidebarLink
            href="/addProject"
            icon={<MdOutlineAddBox />}
            name="Add New Project"
          />
        </span>
      </MenuLayout>
      <MenuLayout className={style.sidebar__nav}>{helpers}</MenuLayout>
      <ThemeChanger />
      {/* <CustomDivider className={style.divider} /> */}
      <UserBlock />
    </aside>
  );
};

export default Sidebar;
