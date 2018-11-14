# ParMais full-stack recruitment test

Thanks for taking the time to do our full-stack coding test. The challenge has two parts:

1) a [task](#task) to create a basic front-end, and back-end client that speaks to the [Chuck Norris API](https://api.chucknorris.io).

2) some [follow-up questions](./FOLLOW-UP.md)

**The challenge runs on Linux and will be tested on a Linux machine.**

----

Feel free to spend as much or as little time as you'd like, as long as the following have been met:

* Your implementation works as described in the [task](#task).

* Your solution follows the provided [design](#design) guidelines.

----

## Task

- Use the provided Swagger API document and integrate with Chuck Norris API to:
    - **List random facts** (filtered by category or not)
    - **List all available categories**
    - **Search for facts**

- Use the returned data to display a page of results that matches the given design.

- When in doubt, follow the **TODOS** spread across the source code.

## Design

The provided project utilizes our own modification of the great [Material-UI](https://material-ui.com/). Should you want to see more of our components there's a [storybook](http://apps.parmais.com.br/storybook) online.

**NB:** You don't have to use our styleguide or our components -- rolling your own css and code to save time is absolutely fine.

## Running the provided implementation

The easy way is running from the project root
 - `npm run setup`
 - `npm start`
 
This will start the backend, frontend and a proxy server [serving the frontend](http://localhost:1815), [backend](http://localhost:1815/api) and [documentation](http://localhost:1815/docs)

## Client implementation

We'd like you to use [React](https://facebook.github.io/react/) and [Swagger](https://github.com/apigee-127/swagger-tools). On top of that, use whatever front-end libraries you feel comfortable with.

We've set you up with a build based on [create-react-app](https://github.com/facebookincubator/create-react-app). To run the client:

- `cd ./frontend`
- `npm install`

- `npm start` to start the client development build at [http://localhost:3000](http://localhost:3000)

There are only some bare bones. You are free to display and control the data to your liking.

## API implementation

We're proxying the Chuck Norris API and have provided a basic - but incomplete - Node.js client.

The [`FactsService.js`](./backend/service/FactsService.js) needs some attention =D 

- `cd ./backend`

- `npm install`

- `npm start` in your terminal; it listens at [http://localhost:8080](http://localhost:8080).

The [API documentation is available here](http://localhost:8080)

- Remember to fetch the results from the target [Chuck Norris API](https://api.chucknorris.io)

## Wiring backend and frontend

- `npm run proxy`, [serves everything](http://localhost:1815) 

## Submission Guidelines

* Please submit your program by sending a zip file or GitHub repository to ti[at]parmais.com.br.

* The submission should contain the [FOLLOW-UP.md](./FOLLOW-UP.md) file with answers to the follow-up questions.

* The submission should **not** include the `node_modules` folder.

* Please let your Par Mais contact know when you've sent your submission.

----

This challenge is based on the awesome [Skyscanner's recruitment test](https://github.com/Skyscanner/full-stack-recruitment-test).