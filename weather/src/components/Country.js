import React from 'react'

const Country = ({data}) => {
    const country = data[0];
    console.log('countries.', country.languages)
    const languages = country.languages;
    return (
        <>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}<br />
            population {country.population}
            </p>
            <br />
            <h3>Languages </h3>
            <ul>
                {languages.map((key, value) =>  // need to fix this 
                    <li > {languages.key}</li>
                )}
            </ul>
            <br />
            <img src={country.flags.png} alt='flag-image' />
        </>
    )
}

export default Country