import { withRouter } from "next/router";
import React from "react";
import ProfileData from "./data_tabs/ProfileData";
import ProjectInformation from "./data_tabs/ProjectInformaition";
import PlanningRequirements from "./data_tabs/PlanningRequirements";
import DemolitionData from "./data_tabs/DemolitionData";

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
      <ProfileData />
      <ProjectInformation />
      <PlanningRequirements />
      <DemolitionData />
    </>
  );
};

export default withRouter(ProjectDataTabContainer);
