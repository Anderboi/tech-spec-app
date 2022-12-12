import {useRouter, withRouter} from 'next/router'
import React from 'react'
import Tab from './Tab'
import TabBody from './TabBody'
import TabHead from './TabHead'
import style from './tabs.module.scss'
import {GrStatusInfo} from 'react-icons/gr'
import {IoIosMore} from 'react-icons/io'
import TabContent from '../project/tabs/DataTab'
import TabContentItem from './TabDataItem'

const ProjectDataTabContainer = ({router}: any) => {
  const rout = useRouter()
  const {
    query: {tab},
  } = router

  const isTabOne = tab === '1' || tab == null
  const isTabTwo = tab === '2'
  const isTabThree = tab === '3'
  const isTabFour = tab === '4'
  return (
    <>
      <TabHead className={style.header}>
        <Tab
          icon={<GrStatusInfo />}
          selected={isTabOne}
          href={{pathname: rout.asPath, query: {tab: '1'}}}
        >
          Project Data
        </Tab>
        <Tab
          icon={<GrStatusInfo />}
          selected={isTabTwo}
          href={{pathname: rout.asPath, query: {tab: '2'}}}
        >
          Project Data
        </Tab>
        <Tab
          icon={<GrStatusInfo />}
          selected={isTabThree}
          href={{pathname: rout.asPath, query: {tab: '3'}}}
        >
          Project Data
        </Tab>
        <Tab
          icon={<GrStatusInfo />}
          selected={isTabFour}
          href={{pathname: rout.asPath, query: {tab: '4'}}}
        >
          Project Data
        </Tab>
        <IoIosMore />
      </TabHead>
      <TabBody>
        {isTabOne && (
          <TabContent>
            <TabContentItem title='Residents Profiles'>Residents:</TabContentItem>
            <TabContentItem title='Planning Requirements'>one</TabContentItem>
            <TabContentItem title='Demolition'>
              <div>
                <h4>Engineering Systems:</h4>
                <span>Heating:</span>
                <span>Plumbing:</span>
                <span>Electrical system:</span>
                <span>Conditioning and ventilation:</span>
                <span>Furniture:</span>
              </div>
              <div>
                <h4>Structural:</h4>
                <span>Walls:</span>
                <span>Plaster:</span>
                <span>Floor Screed:</span>
                <span>Entrance doors:</span>
                <span>Doors:</span>
                <span>Windows:</span>
              </div>
              </TabContentItem>
            <TabContentItem title='Utilities'>one</TabContentItem>
            <TabContentItem title='Equipment'>one</TabContentItem>
          </TabContent>
        )}
        {isTabTwo && <TabContent>Second</TabContent>}
        {isTabThree && <TabContent>Third</TabContent>}
        {isTabFour && <TabContent>Fourth</TabContent>}
      </TabBody>
    </>
  )
}

export default withRouter(ProjectDataTabContainer)
