const CountrList = ({ countryList, setFilter }) => 
    countryList.length > 10 ? 'Too many matches. Please be more specific' : countryList.map(country => <p key={country.name.common}>{country.name.common} <button onClick={() => setFilter(country.name.common)}> Show </button></p>)

export default CountrList