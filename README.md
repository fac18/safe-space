# Safe Space

A project for the MU.

[![Netlify Status](https://api.netlify.com/api/v1/badges/9f58c850-0ff9-4e26-9e5d-4fed62c4bf10/deploy-status)](https://app.netlify.com/sites/safespacemu/deploys)

![Travis Status](https://travis-ci.com/fac18/safe-space.svg?branch=master)

[![codecov](https://codecov.io/gh/fac18/safe-space/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/safe-space)

## Installation and architecture

Clone this repo, navigate into the directory and run `npm i`,

In order to run the app, you'll need to have the Netlify CLI installed. You can do this globally on your machine by running `npm i -g netlify-cli`.

We then run `netlify dev` to start both the React server (on port 3000), the Functions server (on a random port), and the combined result on port 8888.

## Netlify functions

We started by reading FAC developer-in-residence [Oliver James' article](https://oliverjam.es/blog/we-dont-need-servers/) on running serverless applications entirely in the frontend.

We used the [Airtable.js](https://github.com/Airtable/airtable.js) npm package within [Netlify functions](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions) (i.e. simpler AWS Lambdas) to conduct CRUD operations on our Airtable base without revealing the API key.

_CRUD_ = Create Read Update Delete. These actions correspond loosely to the http methods often exposed upon a resource by [RESTful APIs](https://restfulapi.net/) (PUT, GET, POST, DELETE resp.).

Read FaunaDB as Airtable in this image to get an idea of data flows between environments:

[![](https://user-images.githubusercontent.com/532272/42067494-5c4c2b94-7afb-11e8-91b4-0bef66d85584.png)](https://www.netlify.com/blog/2018/07/09/building-serverless-crud-apps-with-netlify-functions-faunadb/)

**Resources**

- The [Netlify Dev readme](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlifytoml-dev-block)
- A vid on [serverless lambda functions](https://www.youtube.com/watch?time_continue=794&v=drJwMlD9Mjo&feature=emb_title)
- [This article](https://medium.com/swlh/up-and-running-with-netlify-airtable-and-react-428959473cf0) explains basic set up of React/Netlify/Airtable combo
- [This is useful](https://flaviocopes.com/airtable/) for understanding how to interact with the base using Airtable.js
- Netlify's own [examples](https://functions.netlify.com/examples/)
- Netlify's own [playground](https://functions-playground.netlify.com/)
- Also, someone has made a [Netlify functions workshop](https://docs.netlify.com/functions/overview/)!
