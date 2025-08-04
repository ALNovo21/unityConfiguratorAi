import { useState } from 'react';
import { gameDefinitions } from '../data/games';
import type { SetupConfig } from './Configurator';

interface DashboardProps {
  config: SetupConfig;
  setConfig: React.Dispatch<React.SetStateAction<SetupConfig>>;
  restart: () => void;
}

export default function Dashboard({ config, setConfig, restart }: DashboardProps) {
  const [editing, setEditing] = useState<string | null>(null);

  const saveEnvironment = (gameKey: string, env: string) => {
    setConfig((c) => ({
      ...c,
      games: {
        ...c.games,
        [gameKey]: { ...c.games[gameKey], environment: env }
      }
    }));
    setEditing(null);
  };

  return (
    <div>
      <h2>Configuration Dashboard</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {Object.entries(config.games)
          .filter(([, g]) => g.enabled)
          .map(([key, g]) => {
            const def = gameDefinitions.find((d) => d.key === key);
            return (
              <div
                key={key}
                style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}
              >
                <h3>{def?.name || key}</h3>
                <p>Environment: {g.environment || 'Not configured'}</p>
                {def && def.environments.length > 0 ? (
                  editing === key ? (
                    <select
                      value={g.environment || ''}
                      onChange={(e) => saveEnvironment(key, e.target.value)}
                    >
                      <option value="">Select environment</option>
                      {def.environments.map((env) => (
                        <option key={env} value={env}>
                          {env}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <button onClick={() => setEditing(key)}>Configure</button>
                  )
                ) : (
                  <p>No configuration required</p>
                )}
              </div>
            );
          })}
      </div>
      <pre>{JSON.stringify(config, null, 2)}</pre>
      <button onClick={restart}>Start over</button>
    </div>
  );
}
