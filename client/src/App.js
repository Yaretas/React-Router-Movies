import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

import Movie from "./Movies/Movie";
// import MovieCard from "./Movies/MovieCard";
import MovieList from "./Movies/MovieList";
import savedList from "./Movies/SavedList";


import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

    return (
    <div className="App">
      
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movie/:id" component={Movie} />
      </div>
    </div>
    );
};

export default App;
