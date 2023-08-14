import Filter from './components/filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newPhone
    }

    var names = persons.map(person => person.name)
    
    if (names.includes(newObject.name) ) {
      alert (`${newName} is already added to phonebook`)
    } else {
      console.log('button clicked', event.target)
      setPersons(persons.concat(newObject))
      setNewName('')
      setNewPhone('')
      alert('Person added to the phonebook!')
    }
  }

  const filter = newFilter==='' ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} onFilterChange={handleFilterChange} />
      <h2>Add a new Person</h2>
      <PersonForm onSubmit={addNewPerson} nameValue={newName} onNameChange={handlePersonChange} phoneValue={newPhone} onPhoneChange={handlePhoneChange} text='Submit' />
      <h2>Numbers</h2>
      <div>
        {filter.map(person => <Persons key={person.name} person={person} />)}
      </div>
      
    </div>
  )
}

export default App