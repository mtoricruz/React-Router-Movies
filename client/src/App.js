import React, { useState } from 'react';
// STEP 2 - import Route/Switch/Link from react router dom
import { Route, Switch, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        {/*Step 3 - wrap comps in routes */}
        <Route path='/movie/:id'>

        </Route>

        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
