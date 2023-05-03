import React from "react";
import GridLayout from "../components/layouts/GridLayout";
import PageLayout from "../components/layouts/PageLayout";
import ProjectCard from "../components/project/project_card/ProjectCard";
import Head from "next/head";
import { Project } from "../types/types";
import { supabase } from "../lib/supabaseClient";

export async function getStaticProps() {
  const { data } = await supabase.from("projects").select("*").order("id");
  return {
    props: {
      projects: data,
    },
  };
}

function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <>
      <PageLayout title="Projects">
        <Head>
          <title>Projects Page</title>
        </Head>
        <GridLayout>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              initDate={project.initDate}
              name={project.name}
              id={project.id}
              address={project.address}
              project_area={project.project_area}
              stage="Feasibility"
              image={project.image}
              Client={project.Client}
            />
          ))}
        </GridLayout>
      </PageLayout>
    </>
  );
}

export default ProjectsPage;
