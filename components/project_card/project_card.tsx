import Image from "next/image";
import React from "react";
import style from "./project_card.module.scss";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import { IProject } from "../../types/types";
import ProjectStage from "./project_stage";
import Divider from "../base/divider";



const ProjectCard = ({ address, area, image, stage }: IProject) => {
  return (
    <div className={style.card}>
      <div className={style.image_conteiner}>
        <div className={style.icons_block}>
          <TiStarOutline />
          <FiMoreVertical />
        </div>
        <img
          className={style.image}
          src="\images\blank.jpg"
          alt="project image"
        />
      </div>
      <div className={style.info_block}>
        <h4 className={style.info_block__title}>{address}</h4>
        <Divider className={style.divider} />

        <div className={style.lower_block}>
          <div>
            <h5 className={style.area_heading}>Area:</h5>
            <h5 className={style.area_value}>{`${area} sq.m.`}</h5>
          </div>

          <ProjectStage stage={stage}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
