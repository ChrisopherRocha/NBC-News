import React from 'react';
import "../styles/LeftSection.css"


const ChildComponent = ({ articles }) => {
  return (
    <div className='leftSide'>
      {articles.map((article, index) => (
            <div className='lContainer'>
                <div className='keys'>
                    <h3><a href={article.url}>{article.title}</a></h3>
                    <p className='author'>{article.author}</p>
                    <p className='description'>{article.description}</p>
                </div>
                <img id='articleImg' src={article.urlToImage} alt={article.title} />
            </div>
        ))}
    </div>
  );
};

export default ChildComponent;
