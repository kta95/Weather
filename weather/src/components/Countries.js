import React from 'react'
import Country from './Country'

const Countries = ({ countries }) => {

    if (countries.length >= 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (countries.length === 1) {
        return (
        <Country data={countries} />
        )     
    } else {    
        return (
            <>
                {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
            </>
    )}

}

export default Countries