import React from "react";
import "./Results.css";


const Results = props => (


  <ul className="list-group results">
    <h3>Search Results</h3>


    {props.results.map(results => (
      <li
        key={results}
        className="list-group-item">

      </li>
    ))}
  </ul>
);

export default Results;
