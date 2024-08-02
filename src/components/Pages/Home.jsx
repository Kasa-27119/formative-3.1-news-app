import React from 'react'
// import useState for changing articles state, useEffect for axios call wrap
import {useState, useEffect} from 'react'
// import axios for api call
import axios from 'axios'
// import useNavigate
import {useNavigate} from 'react'
// import useArticleContext
import {useArticlesContext} from '../hooks/useArticlesContext'

// api key
const apiKey = import.meta.env.NEWS_APP_API_KEY

const Home = () => {
  // set up type/category select state and method
  const [category, setCategory] = useState('')

  // initialise useNavigate
  // const navigate = useNavigate() - working

  // initialise useArticleContext
  // const {articles, dispatch} = useArticleContext() - working
  
  // useEffect + axios call for news articles, success and error
  // useEffect()

  // handlers for search & category changes

  // 
  
  // what is being returned
  return (
    <div>
      Home
      {/* home page content */}
      <div className='news-container'>

        {/* filter & search container */}
        <div className='filter-search-container'>
          {/* search */}
          <div className='search-container'>
            <div className='search-input-container'>
              <label htmlFor='search-input'>Search:</label>
              <input type='text' id='search-input'></input>
            </div>
          </div>
          {/* type filter */}
          <div className='filter-container'>
            <label html='category-select'>Types:</label>
            <select name='category-select' id='category-select'>
            <option value=''>All</option>
            <option value='business'>Business</option>
            <option value='entertainment'>Entertainment</option>
            <option value='health'>Health</option>
            <option value='science'>Science</option>
            <option value='sports'>Sports</option>
            <option value='technology'>Technology</option>
            </select>
          </div>
          {/* end of filters */}
        </div>
        {/* end of filter & search container */}

        {/* article container - article pop. here */}
        <div className='article-container'></div>
      </div>
      {/* end of news container */}
    </div>
  )
}

// leave export alone
export default Home
