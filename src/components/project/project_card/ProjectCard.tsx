import Image from "next/legacy/image";
import React from "react";
import style from "./project_card.module.scss";
import { TiStarOutline } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import { Project } from "../../../types/types";
import ProjectStage from "./ProjectStage";
import CustomDivider from "../../base/divider/CustomDivider";
import Link from 'next/link';

const ProjectCard: React.FunctionComponent<Project> = ({
  // initDate,
  id,
  address,
  project_area,
  image,
  stage,
}): JSX.Element => {
  return (
    <Link href={`/project/${id}`} className={style.card}>
      <div>
        <div className={style.image_conteiner}>
          <div className={style.icons_block}>
            <TiStarOutline />
            <FiMoreVertical />
          </div>
          {image || (
            <Image
              className={style.image}
              src="/images/blank.jpg"
              alt="project image"
              // width={400}
              // height={250}
              layout='fill'
              priority
            />
          )}
        </div>
        <div className={style.info_block}>
          <h3 className={style.info_block__title}>{address}</h3>
          <CustomDivider className={style.divider} />
          <div className={style.lower_block}>
            <div>
              <span className={style.area_heading}>Area: </span>
              <span
                className={style.area_value}
              >{`${project_area} sq.m.`}</span>
            </div>
          </div>
          <ProjectStage stage={stage || "Concept"} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
