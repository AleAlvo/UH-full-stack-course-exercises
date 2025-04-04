import axios from "axios";

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api";

export const getAllCountries = async () => {
	const response = await axios.get(`${BASE_URL}/all`);
	return response.data;
};

export const searchCountriesByName = async (name) => {
	const response = await axios.get(`${BASE_URL}/name/${name}`);
	return response.data;
};
