import { useState } from 'react';
import Configurator from './components/Configurator';

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started ? (
        <div>
          <h1>Novo Unity Pro configurator</h1>
          <button onClick={() => setStarted(true)}>
            Let's configure a unity together
          </button>
        </div>
      ) : (
        <Configurator />
      )}
    </div>
  );
}
