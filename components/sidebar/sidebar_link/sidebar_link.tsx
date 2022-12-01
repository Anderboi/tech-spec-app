import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { menuItem } from "../../../types/nav_item";
import style from "./sidebar_link.module.scss";



const SidebarLink = ({ href, icon, name }: menuItem):JSX.Element => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cn(style.item, router.pathname == href && style.active)}
    >
      <span className={style.icon}>{icon}</span>
      <span className={style.name}>{name}</span>
    </Link>
  );
}

export default SidebarLink;
