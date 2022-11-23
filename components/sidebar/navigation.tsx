import React from "react";
import style from "./navigation.module.scss";
import { useRouter } from "next/router";
import { RiContactsLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { menuItem } from "../../types/nav_item";
import Sidebar_link from "./sidebar_link";

const menuItems: Array<menuItem> = [
  {
    id: 1,
    name: "Projects",
    icon: <GrProjects />,
    href: "/projectsPage",
  },
  {
    id: 2,
    name: "Contacts",
    icon: <RiContactsLine />,
    href: "/contactsPage",
  },
];

function Navigation() {
  const router = useRouter();

  return (
    <nav className={style.nav}>
      {menuItems.map(({ href, icon, id, name }: menuItem) => {
        return <Sidebar_link key={id} href={href} icon={icon} name={name} />;
      })}
    </nav>
  );
}

export default Navigation;
