import Link from "next/link";
import React from "react";
import style from "./LinkButton.module.scss";

interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkButton: React.FunctionComponent<Props> = ({ href, children }) => {
  return (
    <Link href={href} className={style.link} legacyBehavior>
      {children}
    </Link>
  );
};

export default LinkButton;
