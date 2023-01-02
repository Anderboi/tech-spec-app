import React from 'react'
import GridLayout from '../components/layouts/grid_layout'
import PageLayout from '../components/layouts/pageLayout'
import ProjectCard from '../components/project/project_card/project_card'
import Head from 'next/head'
import {createClient} from '@supabase/supabase-js'
import {Project} from '../types/types'

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  )

  const {data} = await supabaseAdmin.from('projects').select('*').order('id')
  return {
    props: {
      projects: data,
    },
  }
}

function ProjectsPage({projects}: {projects: Project[]}) {
  return (
    <>
      <PageLayout title='Projects'>
        <Head>
          <title>Projects Page</title>
        </Head>
        <GridLayout>
          {projects.map(project => (
            <ProjectCard
            key={project.id}
            initDate={project.initDate}
            name={project.name}
            id={project.id}
            address={project.address}
            area={project.area}
            stage='Feasibility'
            image={project.image}
          />
          ))}
          <ProjectCard
            initDate={new Date()}
            name='first'
            id={1}
            address='Rublevskoe s. 3/43'
            area={120}
            stage='Feasibility'
          />
          <ProjectCard
            initDate={new Date()}
            name='first'
            id={2}
            address='Rublevskoe s. 3/43'
            area={64}
            stage='Feasibility'
          />
          <ProjectCard
            initDate={new Date()}
            name='first'
            id={3}
            address='Rublevskoe s. 3/43'
            area={64}
            stage='Feasibility'
          />
          <ProjectCard
            initDate={new Date()}
            name='first'
            id={4}
            address='Rublevskoe s. 3/43'
            area={64}
            stage='Feasibility'
          />
        </GridLayout>
      </PageLayout>
    </>
  )
}

// export function getStaticProps () {

//   // const data =

//   // return {
//   //   props:
//   // }
// }

export default ProjectsPage
