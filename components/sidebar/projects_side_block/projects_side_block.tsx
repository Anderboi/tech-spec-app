import React from "react";
import SidebarLink from "../sidebar_link/sidebar_link";
import { MdOutlineAddBox } from "react-icons/md";
import { BsFillSquareFill } from "react-icons/bs";
import { IProjectsSideBlock } from "./projects_side_block.props";
import style from "./projects_side_block.module.scss";
import { IProject } from "../../../types/types";

const projects: IProject[] = [];

const projectsList = () => {
  return (
    <>
      {projects.map(({ id, name, address, area, stage, image }: IProject) => {
        <SidebarLink
          href="/projectId"
          icon={<BsFillSquareFill />}
          name={name || address}
          key={id}
        />;
      })}
    </>
  );
};

const ProjectsSideBlock = ({
  className,
  ...props
}: IProjectsSideBlock): JSX.Element => {
  return (
    <div className={className}>
      <h3>Favourites</h3>
      
      {projectsList}
      <span className={style.addLink}>
        <SidebarLink
          href="/"
          icon={<MdOutlineAddBox />}
          name="Add New Project"
        />
      </span>
    </div>
  );
};

export default ProjectsSideBlock;
