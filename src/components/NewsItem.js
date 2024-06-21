// NewsItem.js

import React, { useState, useEffect } from 'react';
import './NewsItem.css';
import favouriteIcon from '../assets/favourites.png';
import favouriteIconYellow from '../assets/favourites-yellow.png';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, searchTerm, onRemove }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(item => item.newsUrl === newsUrl));
  }, [newsUrl]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex(item => item.newsUrl === newsUrl);

    if (index !== -1) {
      const updatedFavorites = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false); // Update local state immediately
      if (typeof onRemove === 'function') {
        onRemove(); 
      }
    } else {
      const newItem = { title, description, imageUrl, newsUrl, author, date };
      const updatedFavorites = [...favorites, newItem];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(true); // Update local state immediately
    }
  };

  const highlightText = (text, highlight) => {
    if (!highlight || !text) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="card h-100 card-hover" >
      <img
        src={imageUrl}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{highlightText(title, searchTerm)}</h5>
        <p className="card-text">{highlightText(description, searchTerm)}</p>
        <p className="card-text">
          <small className="text-muted">
            {author && `By ${author} | `}
            {new Date(date).toDateString()}
          </small>
        </p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
          Read More
        </a>
      </div>
      <div className="favorite-button-container">
        <button
          className="btn btn-sm btn-outline-danger favorite-button"
          onClick={toggleFavorite}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <img
            src={isFavorite ? favouriteIconYellow : favouriteIcon}
            alt="Favorite"
            style={{
              width: '40px',
              height: '35px',
            }}
          />
        </button>
        {isHovered && (
          <div className="favorite-tooltip">
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
