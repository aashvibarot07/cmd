function StudentCard({ name, course, marks}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Course: {course}</p>
            <p>Marks: {marks}</p>
        </div>
    );
}
export default StudentCard;