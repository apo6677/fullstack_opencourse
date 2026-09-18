import { useState } from 'react'

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

  const checkSubmit = () => {
    if (persons.map(person => person.name).includes(newName) || persons.map(person => person.number).includes(newNumber)) {
      return true
    }
    else {
      return false
    }
  }

  const handleSubmit = !checkSubmit() ? (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      important: true,
      id: String(persons.length + 1),
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  } : (event) => {
    event.preventDefault()
    alert(`${newName} or number ${newNumber} is already added to phonebook`)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <input
        type="search"
        placeholder="Type here to filter the list"
        onInput={handleSearch} />
      <form onSubmit={handleSubmit}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App