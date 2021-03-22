# React Calendar

This project can be accessed at http://TiagoFuelber.github.io/react-calendar.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Project folder structure

* `src/application`

Application and business logic files

* `src/domain`

Entites and global types

* `src/infra`

Repository classes for data fetching and persisting. Ex. API calls and localStorage.

* `src/state`

App state files. Using React's Context API.

* `src/view`

App's components and UI. In `src/view/shared` for more generic and reusable items.