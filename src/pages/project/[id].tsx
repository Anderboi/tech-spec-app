import React from "react";
import style from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import GridLayout from "./../../components/layouts/grid_layout";
import ProjectDataTabContainer from "../../components/tabs/TabContainer";
import { Project } from "../../types/types";
import { supabase } from '../../lib/supabaseClient';


export async function getServerSideProps(context:any) {
  const { id } = context.query;
  console.log(id)
  const { data } = await supabase
  .from("projects")
  .select("*")
  .eq("id", id)
  return {
    props: {
      project: data[0],
    },
  };
}

const Project = ({ project }: {project: Project}) => {

  return (
    <main className={style.main}>
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
            Address:
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
      <section className={style.section}>
        {/* <div className={style.subheader}>
          <h3>Categories</h3>
          <Link href={'#'} className={style.link}>
            See all
          </Link>
        </div> */}
        <ProjectDataTabContainer />
      </section>
      <section className={style.section}>
        <div className={style.subheader}>
          <h3>Gallery</h3>
          <Link href={"#"} className={style.link}>
            See all
          </Link>
        </div>
        <GridLayout>
          {/* <Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image> */}
        </GridLayout>
      </section>
    </main>
  );
};

export default Project;
