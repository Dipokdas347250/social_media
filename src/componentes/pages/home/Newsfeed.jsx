import React from 'react'
import NewsFeedTop from '../home/NewsfeedTop'
import NewsAbout_Details from './NewsAbout_Details'
import NewsAbout_me from './NewsAbout_me'

const Newsfeed = () => {
  return (
    <>
     <NewsFeedTop/>
     <div className="flex gap-6 mt-8.5">
     <NewsAbout_me/>
      <NewsAbout_Details/>
     </div>
    </>
  )
}

export default Newsfeed