import React from "react";
import ProjectDataBlock from "../project_data_block/ProjectDataBlock";

const ProfileData = () => {
  return (
    <ProjectDataBlock title="Client Information">
      <div>Ф.И.О.:</div>
      <div>Контактный телефон:</div>
      <div>Электронная почта:</div>
    </ProjectDataBlock>
  );
};

export default ProfileData;
