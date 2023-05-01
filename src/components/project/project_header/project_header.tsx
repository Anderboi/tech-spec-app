import React from "react";
import { Project } from "../../../types/types";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import style from "./project_header.module.scss";

function ProjectHeader(project: Project): JSX.Element {
  return (
    <section className={cn(style.header, style.section)}>
      <Image
        src={project.image ? project.image : "/images/blank.jpg"}
        alt="Project image"
        width={960}
        height={280}
        className={style.header__image}
        priority
      />
      <div className={style.textblock}>
        <h3 className={style.textblock__header}>{project.name}</h3>
        {/* <span className={style.date}>{`initDate`}</span> */}
        <span>
          {"Address: "}
          <Link href={"#"} className={style.link}>
            {project.address}
          </Link>
        </span>
        <span>
          Area: <span>{project.project_area}</span>
        </span>
        <span>Client: {project.Client}</span>
        <span>Team: </span>
      </div>
    </section>
  );
}

export default ProjectHeader;
