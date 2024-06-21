import React from 'react';
import Spinner from './UI/Spinner';
import AnimatedLetters from './UI/AnimatedLetters';

const LoadingState = ({ loading, isSearch, letterClass, category, searchTerm, isFavourite }) => {

  // to make the ui component bold
  const boldCategory = category.split("").map((letter, index) => (
    <strong key={index}>{letter}</strong>
  ));

  return (
    <h2 className="text-center" style={{ margin: "30px", marginTop: "70px", fontSize: "3rem" }}>
      {loading && <Spinner />}
      {!loading && !isSearch && (
        isFavourite ? (
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              "M", "y", " ", "F", "a", "v", "o", "r", "i", "t", "e", "s"
            ]}
            idx={25}
          />
        ) : (
          <>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["T", "o", "p", " "]}
              idx={25}
            />
            {boldCategory}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[" ", "H", "e", "a", "d", "l", "i", "n", "e", "s"]}
              idx={40}
            />
          </>
        )
      )}
      {!loading && isSearch && (
        <h2>
          Results for "<span>{searchTerm}</span>"
        </h2>
      )}
    </h2>
  );
};

export default LoadingState;
