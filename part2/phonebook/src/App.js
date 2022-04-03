import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect (() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data);
    })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
  }

  const addNew = (e) => {
    const newObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    e.preventDefault();
    if (!persons.every(obj => JSON.stringify(obj.name) !== JSON.stringify(newObj.name))) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    const personsCopy = [...persons];
    personsCopy.push(newObj)
    setPersons(personsCopy);
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilterChange={handleFilterChange}
        nameFilter={nameFilter}
      />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addNew={addNew}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        nameFilter={nameFilter}
      />
    </div>
  )
}

export default App