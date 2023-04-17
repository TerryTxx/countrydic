
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

-----

## Start the APP

1. Please terminal under the leans-express file, run
### ```npm run dev```
```text
tanxiaoxu@asahis-MacBook-Pro leans-express % npm run dev

> leans-express@1.0.0 dev
> nodemon ./index.js

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./index.js`
http://localhost:3000
The server started successfully!!
```

2. In the country root, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



The page will reload when you make changes.\
Detail could also find in server termimal:
```text
[nodemon] starting `node ./index.js`
http://localhost:3000
The server started successfully!!
{ name: 'Japan' }
Japan
************
```
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

----------------
## Project completion status

#### Frontend design & usability
- Complete
#### Quality of country information rendering
- Complete
#### Code structure & quality
- Complete
#### Loading display logic
- Complete, with integration testing
#### Error handling
- Unit testing available 
#### File / repository structure
- Article-by-article display

#### (BONUS): Testing of application e.g Cypress & Jest
- yes, when npm start, get test terminal also:
```text
/usr/local/bin/npm test
> country@0.1.0 test
> react-scripts test
FAIL  src/App.test.js
● Test suite failed to run
    Jest encountered an unexpected token
    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.
```
#### (BONUS): Deployment / hosting of application (e.g Heroku)
- completed;
https://countryline.herokuapp.com/
