import React from 'react';

const ArticleCard = ({ article }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200/ff6b9d/ffffff?text=Spotify+Design';
  };

  return (
    <article className="article-card">
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        onError={handleImageError}
      />
      <div className="article-content">
        <span className="article-category">{article.category}</span>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-description">{article.description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
