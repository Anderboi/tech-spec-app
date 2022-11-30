import React from 'react'
import Divider from '../components/base/divider'
import GridLayout from '../components/layouts/grid_layout'
import PageSubheader from '../components/page_subheader/page_subheader'
import ProjectCard from '../components/project_card/project_card'

function ContactsPage(): JSX.Element {
  return (
    <>
      <PageSubheader name='Contacts' />
      <Divider />
      <GridLayout>
      <ProjectCard
          name='first'
          id={1}
          address='Rublevskoe s. 3/43'
          area={120}
          stage='Feasibility'
        />
      </GridLayout>
    </>
  )
}

export default ContactsPage
