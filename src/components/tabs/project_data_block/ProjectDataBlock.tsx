import React from 'react'
import style from './project_data_block.module.scss'

interface DataBlockProps {
  title: string;
  children: React.ReactNode;
}

const ProjectDataBlock: React.FunctionComponent<DataBlockProps> = ({title, children}) => {
  return (
    <div className={style.data_block}>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default ProjectDataBlock