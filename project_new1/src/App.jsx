function App() {
  const studentName="Aisha";
  const currentYear= new Date().getFullYear();
  return (
    <div>
      <h1>Hello, {studentName}!</h1>
      <p>This page was rendered in {currentYear}.</p>
    </div>
  );
}
export default App;