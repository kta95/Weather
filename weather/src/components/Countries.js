import React from 'react'
import Country from './Country'

const Countries = ({ countries }) => {
    console.log('countries vountries', countries)
    if (countries.length >= 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (countries.length === 1) {
        const country = countries[0];
        console.log('countries.', country.languages)
        const lan = Object.values(country.languages);
        console.log('keys.', lan)
        const languages = country.languages
        return (
        <Country data={countries} languages={languages} />
        )     
    } else {    
        return (
            <>
                {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
            </>
    )}

}

export default Countries