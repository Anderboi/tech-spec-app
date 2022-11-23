import React from "react";
import Sidebar_link from "./sidebar_link";
import { MdOutlineAddBox } from "react-icons/md";

function Projects_side_block() {
  return (
    <div className="">
      <h2>Favourites</h2>
      <Sidebar_link
        href="/"
        icon={<MdOutlineAddBox />}
        name="Add New Project"
      />
    </div>
  );
}

export default Projects_side_block;
