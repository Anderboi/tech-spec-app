import React from "react";
import style from "./FormBlock.module.scss";

interface FormBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

const FormBlock: React.FunctionComponent<FormBlockProps> = ({
  children,
  title,
  ...props
}): JSX.Element => {
  return (
    <section {...props}>
      <h3>{title}</h3>
      <section className={style.container}>{children}</section>
    </section>
  );
};

export default FormBlock;
