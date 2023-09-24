const Country = ({ country }) => {
    const { name, capital, area, languages, flags } = country
    
    console.log('name', name)
    console.log('capital', capital)
    console.log('area', area)
    console.log('languages', languages)
    console.log('languages', typeof(languages))
    console.log('flag', flags)
    console.log('flag', typeof (flags))

/*    { languages.map(language => <li key={language.name}>{language.name}</li>) } */

    /**/
    

    return (
        <div className="country">
            <h1>{name.common}</h1>
            <p><strong>Capital: </strong>{capital}</p>
            <p><strong>Area: </strong>{area}</p>
            <br></br>
            <h3>Languages:</h3>
            <ul>
                {Object.values(languages).map(language => <li key={language}>{language}</li>) }
            </ul>
            <img src={flags.svg} alt={`flag of ${name}`} width="200px" />
        </div>
    )
    
}


export default Country