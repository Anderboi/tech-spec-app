import Head from "next/head";
import React from "react";
import GridLayout from "../components/layouts/GridLayout";
import PageLayout from "../components/layouts/PageLayout";
import ProjectCard from "../components/project/project_card/ProjectCard";

function ContactsPage(): JSX.Element {
  return (
    <>
      <PageLayout title="Contacts">
        <Head>
          <title>Contacts Page</title>
        </Head>
        <GridLayout>Hello</GridLayout>
      </PageLayout>
    </>
  );
}

export default ContactsPage;
