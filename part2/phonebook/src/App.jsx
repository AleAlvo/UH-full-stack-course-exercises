import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
		});
	}, []);

	const addPerson = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		const person = {
			name: newName,
			number: newNumber,
		};
		setPersons([...persons, person]);
		setNewName("");
		setNewNumber("");
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div>
			<h2>Phonebook</h2>

			<Filter search={search} handleSearchChange={handleSearchChange} />

			<h3>Add a new</h3>

			<PersonForm
				addPerson={addPerson}
				newName={newName}
				newNumber={newNumber}
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
			/>

			<h3>Numbers</h3>

			<Persons persons={filteredPersons} />
		</div>
	);
};

export default App;
