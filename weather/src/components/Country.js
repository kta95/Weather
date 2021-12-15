import React from 'react'


const Country = ({data, languages}) => {

    const country = data[0];
    const newLanguages = [];


    const values = Object.values(languages);
    const keys = Object.keys(languages)

    const newLan = (arr, key, value) => {    
        arr.push({key: value})

        return arr
    }

    for (let i = 0; i < keys.length; i++ ) {
        newLan(newLanguages, keys[i], values[i])
    }

    console.log('newLan', newLanguages)
    return (
        <>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}<br />
            population {country.population}
            </p>
            <br />
            <h3>Languages </h3>
            <ul>
                {
                    newLanguages.map(lan => {
                        console.log('values', typeof value)
                        return(
                            <li>{lan.key}</li>
                            )
                        
                    } 
                )
                }
                
            </ul>
            <br />
            <img src={country.flags.png} alt='flag-image' />
        </>
    )
}

export default Country