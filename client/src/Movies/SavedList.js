import React from 'react';
import { useHistory } from 'react-router-dom'

// const history = useHistory()

// const goHomeHandler = e => {
//   history.push('/')
// }

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">Home</div>
    {/* <button onClick={goHomeHandler} className="home-button">Home</button> */}
  </div>
);

export default SavedList;
