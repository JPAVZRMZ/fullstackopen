import Filter from './components/filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useState, useEffect, useSyncExternalStore } from 'react'
import personService from './services/persons'
import {Succes,Failed} from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [succesMessage, setSuccesMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  

  const hook = () => {
    console.log('effect')
    personService  
      .getaAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }

  useEffect(hook,[])
  
  console.log(persons)

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

    var existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    console.log(`Existing Person ${existingPerson}`)
    
    if (existingPerson && existingPerson.number === newPhone) {
      alert(`${existingPerson} is already added to the phonebook`)
      setNewName('')
      setNewPhone('')
    }
    else if (existingPerson && existingPerson.number !== newPhone){
      if (
        window.confirm(`${existingPerson.name} is already added to the phonebook, replace the old number with the new one?`)
      
      ) {
        const changePerson = { ...existingPerson, number: newPhone }
        const id = existingPerson.id

        personService
          .update(id, changePerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            setNewName('')
            setNewPhone('')
            setSuccesMessage(
              `${returnedPerson.name}'s number updated succesfully!`
            )
            setTimeout(() => setSuccesMessage(null),3000)
          })
          .catch(error => {
            setErrorMessage(`${changePerson.name} was already removed from server`)
            setTimeout(() => { setErrorMessage(null) }, 4000)
            setPersons(persons.filter(person => person.name !== changePerson.name))
          }
            
          )
      } }
    else {
      personService
        .create(newObject)
        .then(returnedPerson => {
          console.log(`New Person Added: ${returnedPerson.name}`)
          console.log('button clicked', event.target)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
          setSuccesMessage(
              `${returnedPerson.name} was added to the PhoneBook Succesfully!`
          )
          setTimeout(() => setSuccesMessage(null),3000)
        })
      }
  }

  const deletePersonOf = (id) => {
    const person = persons.find(person => person.id === id)
    
    if (
    window.confirm(`Delete ${person.name} ?`)){
      personService
        .erase(id)
        .then(returnedPerson => {
          console.log(`Person was deleted from server`, returnedPerson)
          setPersons(persons.filter(person => person.id !== id))
        })}
  } 

  const filter = newFilter ==='' ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Succes message={succesMessage} />
      <Failed message={errorMessage}/>
      <Filter
        filter={newFilter}
        onFilterChange={handleFilterChange} />
      <h2>Add a new Person</h2>
      <PersonForm
        onSubmit={addNewPerson}
        nameValue={newName}
        onNameChange={handlePersonChange}
        phoneValue={newPhone}
        onPhoneChange={handlePhoneChange} text='Submit' />
      <h2>Numbers</h2>
      <div>
        {filter.map(person => <Persons key={person.name} person={person} deletePerson={() => deletePersonOf(person.id)}/>)}
      </div>
      
    </div>
  )
}

export default App