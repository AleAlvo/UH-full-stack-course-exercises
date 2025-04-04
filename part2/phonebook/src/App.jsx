import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");
	const [notification, setNotification] = useState(null);
	const [notificationType, setNotificationType] = useState("success");

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

	const showNotification = (message, type = "success") => {
		setNotification(message);
		setNotificationType(type);
		setTimeout(() => {
			setNotification(null);
		}, 5000);
	};

	const addPerson = (event) => {
		event.preventDefault();

		const existingPerson = persons.find((person) => person.name === newName);

		if (existingPerson) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace the old number with a new one?`,
				)
			) {
				const updatedPerson = { ...existingPerson, number: newNumber };

				personService
					.update(existingPerson.id, updatedPerson)
					.then((returnedPerson) => {
						setPersons(
							persons.map((person) =>
								person.id !== existingPerson.id ? person : returnedPerson,
							),
						);
						setNewName("");
						setNewNumber("");
						showNotification(`Updated ${newName}'s number successfully!`);
					})
					.catch((error) => {
						console.error(`Error updating ${newName}:`, error);
						showNotification(
							`Failed to update ${newName}'s number: ${error.message}`,
							"error",
						);
					});
			}
			return;
		}

		const person = {
			name: newName,
			number: newNumber,
		};

		personService
			.create(person)
			.then((returnedPerson) => {
				setPersons([...persons, returnedPerson]);
				setNewName("");
				setNewNumber("");
				showNotification(`Added ${newName} to phonebook successfully!`);
			})
			.catch((error) => {
				console.error(`Error adding person ${newName}:`, error);
				showNotification(
					`Failed to add ${newName} to phonebook: ${error.message}`,
					"error",
				);
			});
	};

	const deletePerson = (id, name) => {
		if (window.confirm(`Delete ${name}?`)) {
			personService
				.remove(id)
				.then(() => {
					setPersons(persons.filter((person) => person.id !== id));
					showNotification(`Deleted ${name} from phonebook successfully!`);
				})
				.catch((error) => {
					console.error(`Error deleting ${name}:`, error);
					showNotification(
						`Failed to delete ${name} from phonebook: ${error.message}`,
						"error",
					);
				});
		}
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

			<Notification message={notification} type={notificationType} />

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

			<Persons persons={filteredPersons} deletePerson={deletePerson} />
		</div>
	);
};

export default App;
