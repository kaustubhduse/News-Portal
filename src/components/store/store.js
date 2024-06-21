import { configureStore } from '@reduxjs/toolkit';
import NewsReducer from '../reducers/NewsReducer';
const store = configureStore({
  reducer: {
    news: NewsReducer,
    
  },
});

export default store;
