import {useRouter, withRouter} from 'next/router'
import React from 'react'
import Tab from './Tab'
import TabBody from './TabBody'
import TabHead from './TabHead'
import style from './tabs.module.scss'
import {GrStatusInfo} from 'react-icons/gr'
import DataTab from '../project/tabs/DataTab'

const TabContainer = ({router}: any) => {
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
					icon={<GrStatusInfo/>}
					selected={isTabOne}
					href={{pathname: rout.asPath, query: {tab: '1'}}}>
          Project Data
        </Tab>
        <Tab
        icon={<GrStatusInfo/>}
        selected={isTabTwo}
        href={{pathname: rout.asPath, query: {tab: '2'}}}>
          Project Data
        </Tab>
        <Tab
        icon={<GrStatusInfo/>}
        selected={isTabThree}
        href={{pathname: rout.asPath, query: {tab: '3'}}}>
          Project Data
        </Tab>
        <Tab
        icon={<GrStatusInfo/>}
        selected={isTabFour}
        href={{pathname: rout.asPath, query: {tab: '4'}}}>
          Project Data
        </Tab>
        
      </TabHead>
      <TabBody>
				{isTabOne && <DataTab/>}
				{isTabTwo && <div>Tab 2</div>}
				{isTabThree && <div>Tab 3</div>}
				{isTabFour && <div>Tab 4</div>}
			</TabBody>
    </>
  )
}

export default withRouter(TabContainer)
