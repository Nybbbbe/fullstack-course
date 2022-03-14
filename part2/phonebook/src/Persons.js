const Persons = (props) => {
  return (
    <>
    {props.persons.filter(person => person.name.toLocaleLowerCase().startsWith(props.nameFilter.toLocaleLowerCase())).map((person) => {
      return (
        <p key={person.id}>{person.name} {person.number}</p>
      )
    })}
    </>
  )
}

export default Persons