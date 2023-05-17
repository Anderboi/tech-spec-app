import React, { useState } from "react";
import style from "./project_data_block.module.scss";
import cn from "classnames";
//* icons
import { IoIosArrowDown } from "react-icons/io";
import { BiEdit } from "react-icons/bi";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  onEditClick?:()=>void;
}

const ProjectDataBlockLayout: React.FunctionComponent<Props> = ({
  title = "Some Text",
  children,
  className,
  onEditClick,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={style.container}>
      <div className={style.container__head} onClick={handleOpen}>
        <span className={style.header}>{title}</span>
        <div className={style.icon_block}>
          <div className={style.edit}>
            <BiEdit onClick={onEditClick} />
          </div>
          <IoIosArrowDown
            className={cn(style.arrow, { [`${style.arrow_active}`]: open })}
          />
        </div>
      </div>
      <div className={cn(style.container__body, { [`${style.active}`]: open })}>
        <article className={style.data}>{children}</article>
      </div>
    </div>
  );
};

export default ProjectDataBlockLayout;
