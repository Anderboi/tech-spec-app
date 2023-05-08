import React from "react";
import style from "./layout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import MainContentBlock from "../base/main_content_block/MainContentBlock";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  return (
    <div className={style.layoutContainer}>
      <Sidebar />
      <MainContentBlock>{children}</MainContentBlock>
    </div>
  );
};

export default Layout;
