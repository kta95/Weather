import React from 'react'
import Country from './Country'

const Countries = ({ countries, showHandler }) => {
    console.log('countries vountries', countries)
    if (countries.length >= 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (countries.length === 1) {
        const country = countries[0];
        console.log('countries.', country.languages)

        const languages = country.languages
        return (
        <Country data={countries} languages={languages} />
        )     
    } else {    
        return (
            <>
                {countries.map((country, index) => {
                    return (
                    <div key={index}>{country.name.common} 
                    <button onClick={showHandler} country={country.name.common} >show</button></div>
                    )
                })}
            </>
    )}

}

export default Countries