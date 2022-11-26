import React from "react";
import style from "./navigation.module.scss";
import { useRouter } from "next/router";
import { RiContactsLine,RiStackLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { menuItem } from "../../../types/nav_item";
import SidebarLink from "../sidebar_link/sidebar_link";
import cn from 'classnames';
import { INavigation } from "./navigation.props";

const menuItems: Array<menuItem> = [
  {
    id: 1,
    name: "Projects",
    icon: <RiStackLine />,
    href: "/projectsPage",
  },
  {
    id: 2,
    name: "Contacts",
    icon: <RiContactsLine />,
    href: "/contactsPage",
  },
];



const Navigation = ({className, ...props}: INavigation):JSX.Element => {
  const router = useRouter();

  return (
    <nav className={cn(style.nav, className)}>
      {menuItems.map(({ href, icon, id, name }: menuItem) => {
        return <SidebarLink key={id} href={href} icon={icon} name={name} />;
      })}
    </nav>
  );
}

export default Navigation;
