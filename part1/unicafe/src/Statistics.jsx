import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;
	const average = !all ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
	const positive = !all ? 0 : (good / all) * 100;

	return (
		<div>
			<h2>statistics</h2>
			{all === 0 ? (
				<p>No feedback given</p>
			) : (
				<table>
					<tbody>
						<StatisticLine text="good" value={good} />
						<StatisticLine text="neutral" value={neutral} />
						<StatisticLine text="bad" value={bad} />
						<StatisticLine text="all" value={all} />
						<StatisticLine text="average" value={average} />
						<StatisticLine text="positive" value={positive} isPercentage={true} />
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Statistics;
