import React from 'react'
import TabContentItem from '../TabDataItem';

const ProjectInformation = () => {
  return (
    <TabContentItem title="Общая информация по объекту">
      <div>Адрес:</div>
      <div>Площадь объекта:</div>
      <div>Этажность:</div>
      <div>Количество единовременно проживающих:</div>
    </TabContentItem>
  );
}

export default ProjectInformation