import React, { useState } from 'react';
// STEP 2 - import Route/Switch/Link from react router dom
import { Route, Switch} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

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
        <Route path='/movies/:id'>
          <Movie></Movie> {/*Before this was put in. Nothing was showing up because the component wasn't inside the Router in the first place. Even though code inside the Movie component was correct. ALWAYS INSERT COMPONENT NEEDED before moving onto component code */}
        </Route>

        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
