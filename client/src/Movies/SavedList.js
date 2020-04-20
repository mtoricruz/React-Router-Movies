import React from 'react';
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

// const history = useHistory();

// const goHomeHandler = evt => {
//   history.push('/')
// }

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* <button onClick={goHomeHandler} className="home-button">Home</button> */}
    <Link to='/' className="home-button">Home</Link>
  </div>
);

export default SavedList;
