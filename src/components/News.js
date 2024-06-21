import React, { useEffect } from "react";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import NoSearchTerm from "./UI/NoSearchTerm";
import LoadingState from "./LoadingState"; // Import the new component
import Pagination from "./Pagination"; // Import the Pagination component
import {
  setArticles,
  setLoading,
  setPage,
  setTotalResults,
  setIsSearch,
  setFavorites,
} from "./reducers/NewsReducer";

const News = ({ category }) => {
  const dispatch = useDispatch();
  const {
    articles,
    loading,
    page,
    totalResults,
    perPage,
    isSearch,
    favorites,
  } = useSelector((state) => state.news);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialPage = parseInt(params.get("page")) || 1;
    const searchQuery = params.get("q") || "";
    dispatch(setPage(initialPage));
    fetchNews(initialPage, searchQuery);
    dispatch(setFavorites(JSON.parse(localStorage.getItem("favorites")) || []));
  }, [location.search, category, dispatch]);

  const fetchNews = async (pageToFetch, query = "") => {
    dispatch(setLoading(true));
    try {
      const sortBy = getSortByFromURL(location.search);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=bb22be9f5d4d4bac9af45e3e674d7a0e&page=${pageToFetch}&pageSize=${perPage}&sortBy=${sortBy}&q=${query}`;
      const response = await axios.get(url);
      dispatch(setArticles(response.data.articles));
      dispatch(setTotalResults(response.data.totalResults));
      dispatch(setLoading(false));
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(setIsSearch(query !== ""));
    } catch (error) {
      console.error("Error fetching news:", error);
      dispatch(setLoading(false));
    }
  };

  const getSortByFromURL = (search) => {
    const params = new URLSearchParams(search);
    const sortBy = params.get("sortBy");
    return sortBy || "publishedAt";
  };

  const getSearchTermFromURL = (search) => {
    const params = new URLSearchParams(search);
    return params.get("q") || "";
  };

  const handleSearch = (searchTerm) => {
    dispatch(setIsSearch(true));
    navigate(`?page=1&sortBy=${getSortByFromURL(location.search)}&q=${searchTerm}`);
    dispatch(setPage(1));
  };

  const toggleFavorite = (url) => {
    const updatedFavorites = favorites.includes(url)
      ? favorites.filter(fav => fav !== url)
      : [...favorites, url];
    dispatch(setFavorites(updatedFavorites));
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const totalPages = Math.ceil(totalResults / perPage);

  return (
    <div className="container my-3">
      <LoadingState 
        loading={loading} 
        isSearch={isSearch} 
        letterClass="text-animate" 
        category={category} 
        searchTerm={getSearchTermFromURL(location.search)}
        isFavourite={false} 
      />

      {!loading && articles.length === 0 && (
        <NoSearchTerm />
      )}

      {!loading && articles.length > 0 && (
        <>
          <SearchBar onSearch={handleSearch} />
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
                  newsUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  isFavorite={favorites.includes(article.url)}
                  toggleFavorite={toggleFavorite}
                  searchTerm={getSearchTermFromURL(location.search)}
                />
              </div>
            ))}
          </div>
          <Pagination
            page={page}
            setPage={(newPage) => dispatch(setPage(newPage))}
            totalPages={totalPages}
            perPage={perPage}
            totalResults={totalResults}
            navigate={navigate}
            getSortByFromURL={getSortByFromURL}
            getSearchTermFromURL={getSearchTermFromURL}
          />
        </>
      )}
    </div>
  );
};

export default News;
