const Country = (props) => {
  console.log(props.country);
  const country = props.country;

  return (
    <>
      <p>Capital {country.capital[0]}</p>
      <p>Area {country.area}</p>
      <p><b>Languages</b></p>
      <ul>
        {for (const lang in country.languages) {
          return (

          )
        }}
      </ul>
    </>
  )
}

export default Country;