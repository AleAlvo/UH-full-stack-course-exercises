import { useState, useEffect } from "react";
import CountryInfo from "./components/CountryInfo";
import CountryList from "./components/CountryList";
import FilterInput from "./components/FilterInput";
import { getAllCountries } from "./services/countries";

function App() {
	const [countries, setCountries] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [isSearching, setIsSearching] = useState(false);

	useEffect(() => {
		getAllCountries()
			.then((data) => {
				setCountries(data);
			})
			.catch((error) => {
				console.error("Failed to fetch countries:", error);
			});
	}, []);

	const handleSearch = (term) => {
		setSearchTerm(term);
		setSelectedCountry(null);
		setIsSearching(term.length > 0);
	};

	const filteredCountries = countries.filter((country) =>
		country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handleCountrySelect = (country) => {
		setSelectedCountry(country);
	};

	return (
		<div className="app">
			<h1>Countries</h1>
			<FilterInput onSearch={handleSearch} />

			{selectedCountry ? (
				<CountryInfo country={selectedCountry} />
			) : (
				isSearching &&
				(filteredCountries.length > 10 ? (
					<p>Too many matches, specify another filter</p>
				) : filteredCountries.length === 1 ? (
					<CountryInfo country={filteredCountries[0]} />
				) : (
					<CountryList countries={filteredCountries} onSelect={handleCountrySelect} />
				))
			)}
		</div>
	);
}

export default App;
