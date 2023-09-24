import { useState, useEffect } from "react";
import countrieServices from './services/countries'
import Country from './components/Country'
import Filter from './components/filter'
import CountrList from "./components/CountryList"


function App() {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

  console.log("valor de filtro", newFilter)
  
  const hook = () => {
    console.log("effect")
    countrieServices
      .getAll('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(initialCountries => {
        console.log('promise fulfilled')
        setCountries(initialCountries.data.map(country => country))
        console.log('Initial countries', countries)
      })
  }
  useEffect(hook, [])

  const filter = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
  console.log('Filter: ', filter)
 
  return (
    <div>
      <h1>Countries</h1>
      <Filter filterString={newFilter} setFilterString={setNewFilter} />
      <br></br>
      {filter.length === 1 ? <Country country={filter[0]}/> : <CountrList countryList={filter} setFilter={setNewFilter}/>}
    </div>
  );
}

export default App;
