import React from "react";

const CountryInfo = ({ country }) => {
	if (!country) {
		return null;
	}

	return (
		<div>
			<h2>{country.name.common}</h2>

			<div>
				<p>Capital: {country.capital && country.capital[0]}</p>
				<p>Area: {country.area} km²</p>
			</div>

			<h3>Languages:</h3>
			<ul>
				{country.languages &&
					Object.entries(country.languages).map(([code, name]) => (
						<li key={code}>{name}</li>
					))}
			</ul>

			<div>
				<img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
			</div>
		</div>
	);
};

export default CountryInfo;
