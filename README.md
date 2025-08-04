# Novo Unity Configurator Lite

This project provides a starter React + TypeScript configurator created with Vite.
It offers a simple stepper to collect the following information:

1. Choose setup: **Unity Arena** or **8 pod island**
2. Configure locations with name and number of setups
3. Select available games
4. Decide whether a jackpot is required
5. Decide whether wide area network functionality is required


After completing the stepper, a dashboard lists the selected games. Each game appears as a card where the environment (e.g. **Flying**, **Multi**, **Touchbet**) can be configured before viewing the final JSON summary.
Each configuration is represented as JSON and shown after completing the stepper.


Run scripts:

```
npm run dev     # start development server
npm run build   # build for production
npm test        # run placeholder tests
```
