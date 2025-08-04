import { useState } from 'react';

export interface SetupConfig {
  setupType: 'Unity Arena' | '8 pod island';
  locations: { name: string; count: number }[];
  games: Record<string, { enabled: boolean }>;
  jackpot: boolean;
  wideArea: boolean;
}

const gameNames = [
  'roulette',
  'baccarat',
  'blackjack',
  'sic-bo',
  'poker',
  'slot games'
];

export default function Configurator() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<SetupConfig>({
    setupType: 'Unity Arena',
    locations: [{ name: '', count: 1 }],
    games: Object.fromEntries(gameNames.map((n) => [n, { enabled: false }])),
    jackpot: false,
    wideArea: false
  });

  function updateLocation(index: number, field: 'name' | 'count', value: any) {
    setConfig((c) => {
      const locations = [...c.locations];
      const loc = { ...locations[index], [field]: value };
      locations[index] = loc;
      return { ...c, locations };
    });
  }

  function addLocation() {
    setConfig((c) => ({
      ...c,
      locations: [...c.locations, { name: '', count: 1 }]
    }));
  }

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div>
      {step === 0 && (
        <div>
          <h2>Select Setup</h2>
          <button
            onClick={() => setConfig((c) => ({ ...c, setupType: 'Unity Arena' }))}
          >
            Unity Arena
          </button>
          <button
            onClick={() => setConfig((c) => ({ ...c, setupType: '8 pod island' }))}
          >
            8 pod island
          </button>
          <div>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          <h2>Location setup</h2>
          {config.locations.map((loc, i) => (
            <div key={i}>
              <input
                value={loc.name}
                placeholder={`Location ${i + 1} name`}
                onChange={(e) => updateLocation(i, 'name', e.target.value)}
              />
              <button
                onClick={() =>
                  updateLocation(i, 'count', Math.max(1, loc.count - 1))
                }
              >
                -
              </button>
              <span>{loc.count}</span>
              <button onClick={() => updateLocation(i, 'count', loc.count + 1)}>
                +
              </button>
            </div>
          ))}
          <button onClick={addLocation}>Add Location</button>
          <div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Games</h2>
          {gameNames.map((name) => (
            <label key={name} style={{ display: 'block' }}>
              <input
                type="checkbox"
                checked={config.games[name].enabled}
                onChange={(e) =>
                  setConfig((c) => ({
                    ...c,
                    games: {
                      ...c.games,
                      [name]: { enabled: e.target.checked }
                    }
                  }))
                }
              />
              {name}
            </label>
          ))}
          <div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Do you need a jackpot?</h2>
          <label>
            <input
              type="checkbox"
              checked={config.jackpot}
              onChange={(e) =>
                setConfig((c) => ({ ...c, jackpot: e.target.checked }))
              }
            />
            Jackpot
          </label>
          <div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Do you need a wide area network functionality?</h2>
          <label>
            <input
              type="checkbox"
              checked={config.wideArea}
              onChange={(e) =>
                setConfig((c) => ({ ...c, wideArea: e.target.checked }))
              }
            />
            Wide Area Network
          </label>
          <div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Finish</button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div>
          <h2>Configuration Summary</h2>
          <pre>{JSON.stringify(config, null, 2)}</pre>
          <button onClick={() => setStep(0)}>Start over</button>
        </div>
      )}
    </div>
  );
}
