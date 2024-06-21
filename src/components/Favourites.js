import React, { useState, useEffect } from 'react';
import './Favorites.css';
import NewsItem from './NewsItem';
import LoadingState from './LoadingState';

const Favorites = () => {
  const [favoriteArticles, setFavoriteArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [letterClass] = useState("text-animate");
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const fetchFavoriteArticles = () => {
      try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        //console.log('Favorites from localStorage:', favorites);
        setFavoriteArticles(favorites);
      } catch (error) {
        console.error('Error accessing or parsing localStorage:', error);
        setFavoriteArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteArticles();
  }, [isRemoved]);

  const handleRemoveFromFavorites = () => {

    setIsRemoved(true);
    // Component is removed after 1 second

    // Reset isRemoved after 2 seconds
    setTimeout(() => {
      setIsRemoved(false);
    }, 1000); 
  };

  return (
    <div className="container my-3">
      <LoadingState
        loading={loading}
        isSearch={false}
        letterClass={letterClass}
        category={"Favorites"}
        searchTerm={""}
        isFavourite={true}
      />

      {!loading && favoriteArticles.length > 0 && (
        <div className="row">
          {favoriteArticles.map((article, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                newsUrl={article.newsUrl}
                author={article.author}
                date={article.date}
                searchTerm=""
                onRemove={() => handleRemoveFromFavorites()} 
              />
            </div>
          ))}
        </div>
      )}
      
      {!loading && favoriteArticles.length === 0 && (
        <p className="text-center">No favorite articles found.</p>
      )}

      {isRemoved && (
        <div className="alert alert-success text-center" role="alert">
          Article removed from favorites
        </div>
      )}
    </div>
  );
};

export default Favorites;
