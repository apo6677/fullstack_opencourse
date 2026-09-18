import { useState } from 'react'
import Person from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1, important: true },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2, important: true },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3, important: true },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4, important: true }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const personsToShow = persons.filter(person => person.important)
  console.log(persons.map(person => person.important))

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase()
    setPersons(
      persons.map(person => ({
        ...person,
        important: person.name.toLowerCase().includes(searchValue)
      }))
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App