import Link from "next/link";
import React from "react";
import cn from "classnames";
import { menuItem } from "../../types/nav_item";
import style from "./sidebar_link.module.scss";
import { useRouter } from "next/router";

function Sidebar_link({ href, icon, name }: menuItem) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cn(style.item, router.pathname == href && style.active)}
    >
      <span className={style.icon}>{icon}</span>
      {name}
    </Link>
  );
}

export default Sidebar_link;
