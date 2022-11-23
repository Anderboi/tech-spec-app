import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/project_card/project_card";
import style from "./projectsPage.module.scss";

function ProjectsPage() {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className={style.projectsBlock}>
        <ProjectCard
          title="Rublevskoe s. 3/43"
          area={120}
          stage="Feasibility"
        />
        <ProjectCard title="Rublevskoe s. 3/43" area={64} stage="Feasibility" />
        <ProjectCard title="Rublevskoe s. 3/43" area={110} stage="Concept" />
        <ProjectCard
          title="Rublevskoe s. 3/43"
          area={260}
          stage="Construction"
        />
        <ProjectCard
          title="Rublevskoe s. 3/120"
          area={86}
          stage="Development"
        />
        <ProjectCard
          title="Rublevskoe shosse. 113/1043"
          area={87}
          stage="Production"
        />
      </div>
    </Layout>
  );
}

export default ProjectsPage;
