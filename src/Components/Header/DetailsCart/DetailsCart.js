import React from 'react';
import './DetailsCart.css'

const DetailsCart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let details = []
    for (let i = 0; i< cart.length; i++) {
      const country = cart[i];
      details = [country.flag,country.name,country.capital,country.region,country.area,country.population]  
    }

    return (
        <div className ='details-cart'>
            <img src={details[0] || "https://restcountries.eu/data/bgd.svg"} alt=""/>
            <table className='table'>
                <tr>
                    <td>Name </td>
                    <td>{details[1] || 'Bangladesh' }</td>
                </tr>
                <tr>
                    <td>Capital</td>
                    <td>{details[2] || 'Dhaka'}</td>
                </tr>
                <tr>
                    <td>Region</td>
                    <td>{details[3] || 'Asia'}</td>
                </tr>
                <tr>
                    <td>Total Area</td>
                    <td>{details[4] || 147570}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{details[5] || 161006790}</td>
                </tr>
            </table>
        </div>
    );
};

export default DetailsCart;