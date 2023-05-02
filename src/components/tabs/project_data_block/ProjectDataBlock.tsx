import React, { useState } from "react";
import style from "./project_data_block.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import cn from "classnames";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectDataBlock: React.FunctionComponent<Props> = ({
  title = "Some Text",
  children,
  className,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={style.container}>
      <div className={style.container__head} onClick={handleOpen}>
        <span className={style.header}>{title}</span>
        <div>
          {/* Add edit icon here */}
          <IoIosArrowDown
            className={cn(style.icon, { [`${style.icon_active}`]: open })}
          />
        </div>
      </div>
      <div className={cn(style.container__body, { [`${style.active}`]: open })}>
        <article className={style.data}>{children}</article>
      </div>
    </div>
  );
};

export default ProjectDataBlock;
