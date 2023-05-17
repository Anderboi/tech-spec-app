import React from "react";
import ProjectDataBlockLayout from "../project_data_block/ProjectDataBlockLayout";

const DemolitionData = () => {
  return (
    <>
      <ProjectDataBlockLayout title="Информация по демонтажу">
        <div>
          <h4>Инженерные системы:</h4>
          <span>Heating:</span>
          <span>Plumbing:</span>
          <span>Electrical system:</span>
          <span>Conditioning and ventilation:</span>
          <span>Furniture:</span>
        </div>
        <div>
          <h4>Конструкции:</h4>
          <span>Walls:</span>
          <span>Plaster:</span>
          <span>Floor Screed:</span>
          <span>Entrance doors:</span>
          <span>Doors:</span>
          <span>Windows:</span>
        </div>
      </ProjectDataBlockLayout>
      <ProjectDataBlockLayout title="Utilities">one</ProjectDataBlockLayout>
      <ProjectDataBlockLayout title="Equipment">one</ProjectDataBlockLayout>
    </>
  );
};

export default DemolitionData;
