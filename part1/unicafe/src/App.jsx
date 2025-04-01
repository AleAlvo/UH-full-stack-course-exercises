import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleClick = (type) => {
		if (type === "good") {
			setGood(good + 1);
		} else if (type === "neutral") {
			setNeutral(neutral + 1);
		} else if (type === "bad") {
			setBad(bad + 1);
		}
	};

	const all = good + neutral + bad;
	const average = !all ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
	const positive = !all ? 0 : (good / all) * 100;

	return (
		<div>
			<h1>give feedback</h1>
			<div>
				<Button handleClick={handleClick} text="good" />
				<Button handleClick={handleClick} text="neutral" />
				<Button handleClick={handleClick} text="bad" />
			</div>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
