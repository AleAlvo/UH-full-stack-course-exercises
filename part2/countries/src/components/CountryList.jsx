import React from "react";

function CountryList({ countries, onSelect }) {
	if (countries.length === 0) {
		return <p>No countries found.</p>;
	}

	if (countries.length > 10) {
		return <p>Too many matches, please specify another filter.</p>;
	}

	return (
		<ul>
			{countries.map((country) => (
				<li key={country.cca3}>
					{country.name.common}
					<button onClick={() => onSelect(country)}>show</button>
				</li>
			))}
		</ul>
	);
}

export default CountryList;
