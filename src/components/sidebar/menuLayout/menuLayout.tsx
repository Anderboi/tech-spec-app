import React from "react";
import style from "./menuLayout.module.scss";
import { useRouter } from "next/router";
import cn from 'classnames';
import { MenuLayout } from "./menuLayout.props";

const MenuLayout = ({children ,className, ...props}: MenuLayout):JSX.Element => {
  const router = useRouter();

  return (
    <nav className={cn(style.nav, className)}>
      {children}
    </nav>
  );
}

export default MenuLayout;
