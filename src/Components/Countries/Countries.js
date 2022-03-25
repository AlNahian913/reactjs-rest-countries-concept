import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div >
            <h2>Welcome to World of Countries!! </h2>
            <h5>Availabe Country: {countries.length}</h5>
            <div className='grid-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>


        </div>
    );
};
function Country(props) {
    // console.log(props.country)
    const { population, area, capital, region, name, flags } = props.country;
    return (
        <div className='country'>
            <h4>Country Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <h3>Capital :{capital}</h3>
            <h5>Area: {area}</h5>
            <small>Region: {region}</small>
            <h4>Population: {population}</h4>
        </div>
    )
}

export default Countries;