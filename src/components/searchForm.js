import React, {useState} from "react";

const SearchForm = ({setLocation,fetchWeatherData}) => {
    const [inputValue,setInputValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(inputValue);
        fetchWeatherData(inputValue);
    };

    return(
        <form onSubmit={handleSubmit} className="searchForm">
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} 
            placeholder="Enter Location" className="search-input"/>
            <button type="submit" className="searchButton">Search</button>
        </form>
    );
};

export default SearchForm