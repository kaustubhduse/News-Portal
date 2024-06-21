import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News";
import {BrowserRouter as Router,Route,BrowserRouter,Routes,} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Favorites from "./components/Favourites";


const App = () => {
  const [isSearch, setIsSearch] = useState(false);
  const pageSize = 5;
  const apiKey = "bb22be9f5d4d4bac9af45e3e674d7a0e";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {/* <NavBar/> */}
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <BrowserRouter>
        <NavBar isSearch={isSearch} setIsSearch={setIsSearch} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="General"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="Business"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="Entertainment"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="General"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="Health"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="Science"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="Sports"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="Technology"
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            }
          />
          <Route 
          exact 
          path="/favorites" 
          element={
            <Favorites/>
          }
          />
        </Routes>
      </BrowserRouter>
      {/* <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></News> */}
      {/* <Router> */}
      {/* <NavBar/> 
        
       
        {/* </Router> */}
    </div>
  );
};

export default App;
