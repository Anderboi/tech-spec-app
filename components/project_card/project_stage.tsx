import React from "react";
import { Stage } from "../../types/types";
import style from "./project_stage.module.scss";
import cn from "classnames";

interface IStage {
  stage: Stage
}

const ProjectStage = (stage: IStage): JSX.Element => {

  switch (stage.stage) {
    case "Feasibility":
      return (
        <div className={style.container}>
          <div className={style.stage_badge}>{"F"}</div>
        </div>
      );
    case "Concept":
      return (
        <div className={style.container}>
          <div className={cn(style.stage_badge)}></div>
          <div className={cn(style.stage_badge, style.first)}>{"C"}</div>
        </div>
      );
    case "Development":
      return (
        <div className={style.container}>
          <div className={cn(style.stage_badge)}></div>
          <div className={cn(style.stage_badge, style.first)}></div>
          <div className={cn(style.stage_badge, style.second)}>{"D"}</div>
        </div>
      );

    default:
      return (
        <div className={style.container}>
          <div className={style.stage_badge}>{"0"}</div>
        </div>
      );
  }
};

export default ProjectStage;
