import React from "react";
import { GoPlus } from "react-icons/go";
import style from "./page_subheader.module.scss";
import Button from '../inputs/Button';
import { useRouter } from 'next/router';

interface Props {
  title: string;
}

const PageSubheader = ({ title }: Props) => {
  const router = useRouter()
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>{title}</h1>
        <span>Create and manage projects.</span>
      </div>
      <Button mode="action" onClick={() => router.push("/AddProject")}>
        <GoPlus /> New project
      </Button>
    </div>
  );
};

export default PageSubheader;
