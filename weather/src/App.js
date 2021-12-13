import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {

  const [ countries, setNewCountries ] = useState([])
  const [ newName, setNewName ] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setNewCountries(response.data)
        console.log('countries', response.data)
        console.log('names', countries)
      })
  }
  ,[])

  const namesToShow = countries.filter(country => country.name.common.toUpperCase().includes(newName.toUpperCase()))

  console.log('name to show', namesToShow)
  return (
      <>
        <Filter name={newName} handler={handleName} />
        <Countries className="countries" countries={namesToShow} />
      </>
  )
}

export default App;
