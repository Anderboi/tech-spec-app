import React from "react";
import ProjectDataBlock from "../project_data_block/ProjectDataBlock";

const DemolitionData = () => {
  return (
    <>
      <ProjectDataBlock title="Информация по демонтажу">
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
      </ProjectDataBlock>
      <ProjectDataBlock title="Utilities">one</ProjectDataBlock>
      <ProjectDataBlock title="Equipment">one</ProjectDataBlock>
    </>
  );
};

export default DemolitionData;
