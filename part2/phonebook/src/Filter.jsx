const Filter = ({ search, handleSearchChange }) => {
	return (
		<div>
			filter numbers: <input value={search} onChange={handleSearchChange} />
		</div>
	);
};

export default Filter;
