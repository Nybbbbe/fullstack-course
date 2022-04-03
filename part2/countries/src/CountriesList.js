const CountriesList = (props) => {
  

  return (
    <>
      {props.filteredCountries.map(country => {
        return (
          <p key={country.name.common}>{country.name.common}</p>
        )
      })}
    </>
  )
}

export default CountriesList;