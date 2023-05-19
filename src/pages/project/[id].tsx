import React from "react";
import ProjectDataTabContainer from "../../components/tabs/TabContainer";
import { Project } from "../../types/types";
import { supabase } from "../../lib/supabaseClient";
import ProjectHeader from "../../components/project/project_header/ProjectHeader";
import ProjectGallary from '../../components/project/project_gallary/ProjectGallary';

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const { data } = await supabase.from("projects").select("*").eq("id", id);
  return {
    props: {
      project: data && data[0],
    },
  };
}

const Project = ({ project }: { project: Project }) => {
  return (
    <>
      <ProjectHeader
        client={project.client}
        address={project.address}
        name={project.name}
        project_area={project.project_area}
        image={project.image}
        id={project.id}
        initDate={project.initDate}
        stage={project.stage}
      />
      {/* <section className={style.section}>
        <div className={style.subheader}>
          <h3>Categories</h3>
          <Link href={'#'} className={style.link}>
            See all
          </Link>
        </div>
      </section> */}
      <ProjectDataTabContainer />
      <ProjectGallary />
    </>
  );
};

export default Project;
