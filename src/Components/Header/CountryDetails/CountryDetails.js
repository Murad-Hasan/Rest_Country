import React from 'react';
import './CountryDetails.css'

const CountryDetails = (props) => {
    return (
        <div className ="country-details">
           <h3>Country Name: {props.country.name}</h3>
           <img src= {props.country.flag} alt=""/>
           <h4>Region: {props.country.region}</h4>
           <h2>Capital: {props.country.capital}</h2>
           <button onClick = {() => props.handleDetailsButton(props.country)} className ='details-btn'>Show Details</button>
        </div>
    );
};

export default CountryDetails;