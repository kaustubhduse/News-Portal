import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  loading: true,
  page: 1,
  totalResults: 0,
  totalPages: 0,
  perPage: 6,
  isSearch: false,
  favorites: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
    setIsSearch(state, action) {
      state.isSearch = action.payload;
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action) {
      const url = action.payload;
      if (state.favorites.includes(url)) {
        state.favorites = state.favorites.filter(fav => fav !== url);
      } else {
        state.favorites = [...state.favorites, url];
      }
    },
  },
});

export const {
  setArticles,
  setLoading,
  setPage,
  setTotalResults,
  setIsSearch,
  setFavorites,
  toggleFavorite,
} = newsSlice.actions;

export default newsSlice.reducer;
