const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
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
        <form onSubmit={handleSubmit}>
            <div>name: <input value={newName} onChange={handleNameChange} /></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>)
}

export default PersonForm