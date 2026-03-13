import React from 'react'
import NewsFeedTop from '../home/NewsfeedTop'
import NewsAbout_me from '../home/NewsAbout_me'
import NewsAbout_Details from '../home/NewsAbout_Details'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NewsAbout_tabs from './NewsAbout_tabs';



const NewsAbout = () => {
  return (
    <>
    <section>
      <NewsFeedTop/>
      <NewsAbout_tabs/>
    </section>
    </>
  )
}

export default NewsAbout