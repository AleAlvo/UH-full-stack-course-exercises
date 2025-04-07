import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const getAll = () => {
	const request = axios.get(baseUrl);
	return request
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error fetching persons:", error);
			throw error;
		});
};

const create = (newPerson) => {
	const request = axios.post(baseUrl, newPerson);
	return request
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error creating person:", error);
			throw error;
		});
};

const update = (id, updatedPerson) => {
	const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
	return request
		.then((response) => response.data)
		.catch((error) => {
			console.error(`Error updating person ${id}:`, error);
			throw error;
		});
};

const remove = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`);
	return request
		.then((response) => response.data)
		.catch((error) => {
			console.error(`Error deleting person ${id}:`, error);
			throw error;
		});
};

export default { getAll, create, update, remove };
