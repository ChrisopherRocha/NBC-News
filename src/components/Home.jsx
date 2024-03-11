// Home.js
import React, { useEffect, useState } from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import '../styles/Home.css'

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [headlines, setHeadlines] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=0fdf6e871e404913901e5b8d9d25f502')
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0fdf6e871e404913901e5b8d9d25f502')
      .then(response => response.json())
      .then(data => {
        setHeadlines(data.articles);
        console.log(data, "response2")

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='home'>
      <LeftSection articles={articles} />
      <RightSection headlines={headlines} />
    </div>
  );
};

export default Home;
