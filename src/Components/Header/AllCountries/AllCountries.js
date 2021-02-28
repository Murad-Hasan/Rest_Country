import React, { useEffect, useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import DetailsCart from '../DetailsCart/DetailsCart';
import './AllCountries.css'

const AllCountries = () => {
    const [countries, setCountries] = useState([])
    const [cart, setCart] = useState([])

    const handleDetailsButton = (country) => {
        const newCart = [...cart, country]
        setCart(newCart);
    }

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    return (
        <div className = 'allcountry-style'>
            <div>
                 <DetailsCart cart = {cart}></DetailsCart>
            </div>
           <div>
           {
                countries.map(country => <CountryDetails handleDetailsButton ={handleDetailsButton} key = {country.name} country = {country}></CountryDetails>)
            }
           </div>
        </div>
    );
};

export default AllCountries;