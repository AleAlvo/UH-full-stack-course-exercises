const StatisticLine = ({ text, value, isPercentage }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>
				{value}
				{isPercentage ? " %" : ""}
			</td>
		</tr>
	);
};

export default StatisticLine;
