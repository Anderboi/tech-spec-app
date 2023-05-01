import { useRouter, withRouter } from "next/router";
import React from "react";
import Tab from "./Tab";
import TabBody from "./TabBody";
import TabHead from "./TabHead";
import style from "./tabs.module.scss";
import { BsClipboardData } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import TabContent from "../project/tabs/DataTab";
import TabContentItem from "./TabDataItem";
import TabsHeader from "./tabs_header/tabs_header";
import ProfileData from "./data_tabs/ProfileData";
import ProjectInformation from "./data_tabs/ProjectInformaition";
import PlanningRequirements from "./data_tabs/PlanningRequirements";
import DemolitionData from './data_tabs/DemolitionData';

const ProjectDataTabContainer = ({ router }: any) => {
  const {
    query: { tab },
  } = router;

  //! Tabs for different subgroups, if needed
  // const isTabOne = tab === '1' || tab == null
  // const isTabTwo = tab === '2'
  // const isTabThree = tab === '3'
  // const isTabFour = tab === '4'

  return (
    <>
      {/* <TabsHeader/> */}
      {/* <TabBody> */}
      {/* {isTabOne && ( */}
      <TabContent>
        <ProfileData />
        <ProjectInformation />
        <PlanningRequirements />
        <DemolitionData/>
      </TabContent>
      {/* )} */}
      {/* {isTabTwo && <TabContent>Second</TabContent>}
        {isTabThree && <TabContent>Third</TabContent>}
        {isTabFour && <TabContent>Fourth</TabContent>} */}
      {/* </TabBody> */}
    </>
  );
};

export default withRouter(ProjectDataTabContainer);
