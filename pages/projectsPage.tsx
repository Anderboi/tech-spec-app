import React from 'react'
import GridLayout from '../components/layouts/grid_layout'
import PageLayout from '../components/layouts/pageLayout'
import ProjectCard from '../components/project_card/project_card'
import Head from 'next/head'

function ProjectsPage() {
  return (
    <>
      <PageLayout title='Projects'>
        <Head>
          <title>Projects Page</title>
        </Head>
        <GridLayout>
          <ProjectCard
            name='first'
            id={1}
            address='Rublevskoe s. 3/43'
            area={120}
            stage='Feasibility'
          />
          <ProjectCard
            name='first'
            id={2}
            address='Rublevskoe s. 3/43'
            area={64}
            stage='Feasibility'
          />
          <ProjectCard
            name='first'
            id={2}
            address='Rublevskoe s. 3/43'
            area={64}
            stage='Feasibility'
          />
          <ProjectCard
            name='first'
            id={2}
            address='Rublevskoe s. 3/43'
            area={64}
            stage='Feasibility'
          />
        </GridLayout>
      </PageLayout>
    </>
  )
}

export default ProjectsPage
