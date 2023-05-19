import Link from "next/link";
import React from "react";
import style from "./project_gallary.module.scss";
import GridLayout from "../../layouts/GridLayout";

interface Props {
  children?: React.ReactNode;
}

const ProjectGallary: React.FunctionComponent<Props> = ({children}):JSX.Element => {
  return (
    <section className={style.section}>
      <div className={style.subheader}>
        <h3>Gallery</h3>
        <Link href={"#"} className={style.link}>
          See all
        </Link>
      </div>
      <GridLayout>{children}</GridLayout>
    </section>
  );
}

export default ProjectGallary;
