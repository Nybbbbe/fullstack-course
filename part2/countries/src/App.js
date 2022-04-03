import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import CountriesList from './CountriesList';
import Country from './Country';

const App = () => {
  const [countries, setCountires] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      console.log(response.data);
      setCountires(response.data);
    })
  }, []);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  }

  const filteredCountries = countries.filter(country => country.name.common.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase()))

  return (
    <>
    <Search
      searchString={searchString}
      handleSearchChange={handleSearchChange}
    />
    {filteredCountries.length < 11 ?
      <CountriesList
      filteredCountries={filteredCountries}
      />
    :
    <p>Too many matches, specify another filter</p>
    }
    {filteredCountries.length === 1 &&
      <Country country={filteredCountries[0]} />
    }

    </>
  )
}

export default App