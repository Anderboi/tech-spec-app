import React from "react";
import { Project } from "../../../types/types";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import style from "./project_header.module.scss";

function ProjectHeader(project: Project): JSX.Element {
  return (
    <section className={cn(style.header, style.section)}>
      {/* <div className={style.header__image}> */}
        <Image
          src={project.image ? project.image : "/images/blank.jpg"}
          alt="Project cover"
          width='600'
          height='440'
          // sizes="100vw"
          // fill
          style={{ width: "100%", height: "300px" , objectFit: "cover"}}
          priority
        />
      {/* </div> */}
      <div className={style.textblock}>
        <h3 className={style.textblock__header}>{project.name}</h3>
        {/* <span className={style.date}>{`initDate`}</span> */}
        <span>
          {"Address: "}
          <Link href={"#"} className={style.link} legacyBehavior>
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
