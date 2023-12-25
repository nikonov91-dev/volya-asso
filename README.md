# Getting Started with Create React App

## Prepare your environment:

Install globally:
* NodeJS
* yarn
* prettier
* eslint

## Run the project

Use `npm install` or `yarn` to install the app dependencies.

## Available Scripts

In the project directory, you can run:

* `yarn start` - starts at http://localhost:3000

* `yarn trans` - passes all components and creates translation. Once the main translation file is done, you need to copy-paste it to another langs folders and manually translate it. Finally add it to commit.

* `yarn trans-non-stop` - Do all the same as `yarn trans` keeping the script on.

* `yarn lint` - DONT use it: expected to check and fix linting errors before commit, but Eslint config should be fixed in order to make it work.

* `yarn build` - creates a built for deployment

* `yarn deploy` - deploys it to GitHub pages. Do not forget to fix the `homepage` field in package.json

## Remote repo
https://github.com/nikonov91-dev/volya-asso

Add env.variables in GitHub going in `Settings->Environments->Configure github-pages->Environment variables`

## Edit existing data in project

Update `fixtures.ts` and upload imgs into `src/assets`.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

