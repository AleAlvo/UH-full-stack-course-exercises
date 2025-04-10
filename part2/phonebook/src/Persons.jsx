import Person from "./Person";

const Persons = ({ persons, deletePerson }) => {
	return (
		<div>
			{persons.map((person) => (
				<div key={person.id}>
					{person.name} {person.number}
					<button onClick={() => deletePerson(person.id, person.name)}>delete</button>
				</div>
			))}
		</div>
	);
};

export default Persons;
