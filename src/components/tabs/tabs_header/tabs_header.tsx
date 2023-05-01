import React from 'react'
import TabHead from '../TabHead';
import Tab from '../Tab';
import { BsClipboardData } from 'react-icons/bs';
import { useRouter } from 'next/router';
import style from './tabs_header.module.scss'

function TabsHeader() {
    const rout = useRouter();


      const isTabOne = tab === "1" || tab == null;
      const isTabTwo = tab === "2";
      const isTabThree = tab === "3";
      const isTabFour = tab === "4";
  return (
    <TabHead className={style.header}>
      <Tab
        icon={<BsClipboardData />}
        selected={isTabOne}
        href={{ pathname: rout.asPath, query: { tab: "1" } }}
      >
        Project Data
      </Tab>
      <Tab
        icon={<BsClipboardData />}
        selected={isTabTwo}
        href={{ pathname: rout.asPath, query: { tab: "2" } }}
      >
        Project Data
      </Tab>
      <Tab
        icon={<BsClipboardData />}
        selected={isTabThree}
        href={{ pathname: rout.asPath, query: { tab: "3" } }}
      >
        Project Data
      </Tab>
      <Tab
        icon={<BsClipboardData />}
        selected={isTabFour}
        href={{ pathname: rout.asPath, query: { tab: "4" } }}
      >
        Project Data
      </Tab>
      <IoIosMore />
    </TabHead>
  );
}

export default TabsHeader