import CourseHeader from "./CourseHeader";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
	return (
		<div>
			<CourseHeader course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default Course;
