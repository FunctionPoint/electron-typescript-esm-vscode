
# Electron with Typescript and ESM in VSCode

The aim of this repository is to help setting up Visual Studio Code for development of Electron apps in TypeScript
using the latest language and module standards with in a fully object-orented MVC app design.

These are the features of this repo:

- Latest ES Modules in TypeScript with "ESNext" in tsconfig.json.
- Latest Node module system with "NodeNext" in tsconfig.json
- ES module generation with "module" in package.json
- VSCode workspace for easy launching.
- VSCode debugging configurations for Main and Renderer processes in launch.json.
- VSCode default TypeScript watch task.
	So no full build every on run.
- Tasks in VSCode tasks.json
  	So not in package.json scripts.
- All code in classes in MVC pattern.
	So no global functions and variables.
- Separate Electron boiler plate code from user code.
- Consistent variable and function naming and logging.
- Implements Node (main) and browser (renderer) components.
- Implements IPC for communicating between main and renderer components\
  with async and sync operations.

I borrowed a lot from these repo's for the groundwork:

	https://github.com/electron/electron-quick-start-typescript
	https://github.com/abartho/electron-typescript-vscode

## Install application

### Make sure TypeScript is installed globally:

	`npm install -g typescript`

### On Windows: Associate *.sh scripts with bash

Download Git for Windows from:

	https://git-scm.com/download/win

Double-click on preLaunch.sh and open it always with Git Bash

# Install dependencies: Electron

`npm install`

## Set up Visual Studio Code and start debugging

- Open `Electron.code-workspace` with Visual Studio Code.
- Set a breakpoint in `src/MyApp.ts` and `src/MyView.ts`.
- In the Run view, select the "Electron: All" configuration.
- Click the green arrow next to the "Electron: All" configuration.
- The breakpoint in `MyApp.ts` will be hit.

- Continue by pressing [F5]
- In the Electron example app, click the "Turn page green" button.
- The breakpoint in `MyView.ts` will be hit.
```
