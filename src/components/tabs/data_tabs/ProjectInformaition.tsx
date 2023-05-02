import React from "react";
import ProjectDataBlock from "../project_data_block/ProjectDataBlock";

const ProjectInformation = () => {
  return (
    <ProjectDataBlock title="Общая информация по объекту">
      <div>Адрес:</div>
      <div>Площадь объекта:</div>
      <div>Этажность:</div>
      <div>Количество единовременно проживающих:</div>
    </ProjectDataBlock>
  );
};

export default ProjectInformation;
