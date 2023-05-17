import React from "react";
import ProjectDataBlockLayout from "../project_data_block/ProjectDataBlockLayout";

const ProfileData = () => {
  return (
    <ProjectDataBlockLayout title="Client Information">
      <div>Ф.И.О.:</div>
      <div>Контактный телефон:</div>
      <div>Электронная почта:</div>
    </ProjectDataBlockLayout>
  );
};

export default ProfileData;
