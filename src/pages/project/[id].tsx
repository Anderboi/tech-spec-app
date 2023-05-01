import React from "react";
import ProjectDataTabContainer from "../../components/tabs/TabContainer";
import { Project } from "../../types/types";
import { supabase } from "../../lib/supabaseClient";
import ProjectHeader from "../../components/project/project_header/project_header";
import ProjectGallary from '../../components/project/project_gallary/project_gallary';

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  console.log(id);
  const { data } = await supabase.from("projects").select("*").eq("id", id);
  return {
    props: {
      project: data[0],
    },
  };
}

const Project = ({ project }: { project: Project }) => {
  return (
    <main >
      <ProjectHeader
        Client={project.Client}
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
      <ProjectGallary/>
    </main>
  );
};

export default Project;
