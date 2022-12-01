import Head from 'next/head'
import React from 'react'
import GridLayout from '../components/layouts/grid_layout'
import PageLayout from '../components/layouts/pageLayout'
import ProjectCard from '../components/project_card/project_card'

function ContactsPage(): JSX.Element {
  return (
    <>
      <PageLayout title='Contacts'>
        <Head>
          <title>Contacts Page</title>
        </Head>
        <GridLayout>
          <ProjectCard
            name='first'
            id={1}
            address='Rublevskoe s. 3/43'
            area={120}
            stage='Feasibility'
          />
        </GridLayout>
      </PageLayout>
    </>
  )
}

export default ContactsPage
