import Image from "next/image";
import React from "react";
import style from "./project_card.module.scss";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import { Project } from "../../../types/types";
import ProjectStage from "./project_stage";
import CustomDivider from "../../base/customDivider";
import Link from "next/link";

const ProjectCard: React.FunctionComponent<Project> = ({
  initDate,
  id,
  address,
  project_area,
  image,
  stage,
}): JSX.Element => {
  return (
    <Link href={`/project/${id}`} className={style.card}>
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
            fill
          />
        )}
      </div>
      <div className={style.info_block}>
        <h4 className={style.info_block__title}>{address}</h4>
        <CustomDivider className={style.divider} />

        <div className={style.lower_block}>
          <div>
            <h5 className={style.area_heading}>Area:</h5>
            <h5 className={style.area_value}>{`${project_area} sq.m.`}</h5>
          </div>

          <ProjectStage stage={stage || "Concept"} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
