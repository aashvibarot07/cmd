import { useState } from 'react';
import Child from './Child';

function App() {
  const {username} = useState("Aashvi");

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Child username={username} />
    </div>
  );
}

export default App;