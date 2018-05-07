import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array

const SearchForm = props => (
    <div className="container-fluid">
    <form className="search">
        <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="topic"
                type="text"
                list="topic"
                className="form-control"
                id="topic"
                aria-describedby="Input Topic"
                placeholder="Enter Topic"
            />
            <datalist id="topic">
        {/* {props.topic.map(topic => <option value={topic} key={topic} />)} */}
      </datalist>

        </div>
        <div className="form-group">
            <label htmlFor="startYear">Start Year</label>
            <input
                value={props.search}
                onChange={props.handleInputChange} 
                type="text"
                className="form-control"
                id="startYear"
                placeholder="Enter Start Date (YYYYMMDD)"
            />
            <datalist id="startYear">
        {/* {props.topic.map(startYear => <option value={startYear} key={startYear} />)} */}
        </datalist>
        </div>

        <div className="form-group">
            <label htmlFor="end-year">End Year</label>
            <input
                value={props.search}
                onChange={props.handleInputChange} 
                type="text"
                className="form-control"
                id="endYear"
                placeholder="Enter End Date (YYYYMMDD)"
            />
                <datalist id="startYear">
        {/* {props.topic.map(endYear => <option value={endYear} key={endYear} />)} */}
        </datalist>
        </div>

        <button
            type="submit"
            className="btn btn-primary"
        >
            Search
         </button>
    </form>
    </div>
);

export default SearchForm;

