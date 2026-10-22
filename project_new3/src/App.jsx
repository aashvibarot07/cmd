import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <h1>Student List</h1>

      {/* name,course,marks are props passed to StudentCard */}
      <StudentCard name="Aashvi" course="React JS" marks={92} />
      <StudentCard name="Upasana" course="React JS" marks={85} />
      <StudentCard name="Yashvi" course="React JS" marks={78} />
      </div>
  );
}
export default App;