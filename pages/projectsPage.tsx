import Link from "next/link";
import React from "react";
import Divider from "../components/base/divider";
import PageSubheader from "../components/page_subheader/page_subheader";
import ProjectCard from "../components/project_card/project_card";
import style from "./projectsPage.module.scss";


function ProjectsPage() {
  return (
    <>
      <PageSubheader/>
      <Divider className={style.divider}/>
      <div className={style.projectsBlock}>
        <ProjectCard
          address="Rublevskoe s. 3/43"
          area={120}
          stage="Feasibility"
        />
        <ProjectCard address="Rublevskoe s. 3/43" area={64} stage="Feasibility" />
        <ProjectCard address="Rublevskoe s. 3/43" area={110} stage="Concept" />
        <ProjectCard
          address="Rublevskoe s. 3/43"
          area={260}
          stage="Construction"
        />
        <ProjectCard
          address="Rublevskoe s. 3/120"
          area={86}
          stage="Development"
        />
        <ProjectCard
          address="Rublevskoe shosse. 113/1043"
          area={87}
          stage="Production"
        />
      </div>
    </>
  );
}

export default ProjectsPage;
