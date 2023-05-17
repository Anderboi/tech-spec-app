import React from "react";
import ProjectDataBlockLayout from "../project_data_block/ProjectDataBlockLayout";

const ProjectInformation = () => {
  return (
    <ProjectDataBlockLayout title="Общая информация по объекту">
      <div>Адрес:</div>
      <div>Площадь объекта:</div>
      <div>Этажность:</div>
      <div>Количество единовременно проживающих:</div>
    </ProjectDataBlockLayout>
  );
};

export default ProjectInformation;
