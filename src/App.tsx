import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello World!</h1>
    </div>
  );
}

export default App;