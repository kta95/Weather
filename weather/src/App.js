import React, { useState, useEffect } from 'react'
import './App.css';
import getAll from './services/CountryService';
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {

  const [ countries, setNewCountries ] = useState([])
  const [ newName, setNewName ] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value);
  }
  console.log('names', typeof countries)

  useEffect(() => {
    getAll()
      .then(returnedValue => {
        setNewCountries(returnedValue)
        console.log('countries haha', returnedValue)
      })
  }
  ,[])
  console.log('names', typeof countries)
  const namesToShow = countries.filter(country => country.name.common.toUpperCase().includes(newName.toUpperCase()))

  const showHandler = (event) => {
    setNewName(event.target.attributes.country.value)
  }

  console.log('name to show', typeof namesToShow)
  return (
      <>
        <Filter name={newName} handler={handleName} />
        <Countries className="countries" countries={namesToShow} showHandler={showHandler} />
      </>
  )
}

export default App;
