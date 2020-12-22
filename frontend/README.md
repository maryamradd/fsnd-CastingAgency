# Casting Agency Frontend

- bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- UI components from [Chakra UI](https://chakra-ui.com/)
- handling forms with [formik](https://formik.org/)

you can view the frontend app [here](https://cast1ng-agency.herokuapp.com/)

## Run locally

this frontend was made to work with the Flask backend.
to run localy you need [node and NPM](https://nodejs.org/en/download/)

#### Enviroment setup

- clone the repo
- in the frontend directory make a `.env` file and store in it the following variables:

```
REACT_APP_API_URL=localhost:5000/api
REACT_APP_URL=localhost:3000
REACT_APP_AUTH0_DOMAIN=yourauth0domain
REACT_APP_AUTH0_CLIENT_ID=yourauth0clientid
REACT_APP_AUTH0_AUDIENCE=auth0audience
```

To run the development server, run:

```
npm install
npm start
```
