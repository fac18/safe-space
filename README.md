# Safe Space

[![Netlify Status](https://api.netlify.com/api/v1/badges/9f58c850-0ff9-4e26-9e5d-4fed62c4bf10/deploy-status)](https://app.netlify.com/sites/safespacemu/deploys) | ![Travis Status](https://travis-ci.com/fac18/safe-space.svg?branch=master) | [![codecov](https://codecov.io/gh/fac18/safe-space/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/safe-space)

**Authors**: [@redahaq](https://github.com/redahaq) | [@bethanyios](https://github.com/bethanyios) | [@alexandraOM](https://github.com/fac18/safe-space/commits?author=AlexandraOM) | [@groupanimal](https://github.com/groupanimal)

We're a team of four developers working on a _Tech for Better_ project for the [Musicians Union](https://www.musiciansunion.org.uk/).

Safe Space is a site to make it easier for people in the industry (especially freelance musicians) to report incidents of sexual abuse or harassment at work.

## Installation

### Showcase version

Clone this repo, navigate into the directory and run `npm i`, then `npm start`.

This will run the React app on port 3000 with the survey questions hard coded.

### Full functionality

If you want to enable the backend functionality - that is, to fetch data from and feed data to an Airtable base - you'll need to use [Netlify Dev](https://www.netlify.com/products/dev/) (or just visit our [stable deploy](https://safespacemu.netlify.com/)).

First make sure you have an Airtable base with 'UserQuestions' and 'Results' tables prepared in accordance with the schema defined later in this documentation.

Then, you need to have the Netlify CLI installed. You can do this globally on your machine by running `npm i -g netlify-cli`.

Log in to [Netlify](https://app.netlify.com/) in your browser (if you don't have an account, make one). Then, back in the terminal, run `netlify login` and it'll raise the browser to complete the process.

Now to set up [continous deployment](https://docs.netlify.com/cli/get-started/#continuous-deployment). Assuming your project is associated with a Github repo (for example, as a fork of this project), run `netlify init` to raise the browser, where you'll be prompted to give Netlify access to your Github account, and automate the set up.

If instead your project is stored locally, deploy direct to Netlify by running `netlify deploy`.

We need to make sure your Netlify deploy has the environment variables it needs to make the secure Airtable connection. Navigate to your Airtable base, click 'Help' in the top right, and choose 'API Documentation'. Here you will find the _base ID_. Then go to the [account page](https://airtable.com/account) to get your _personal API key_.

Open your site overview on Netlify by writing `netlify open` in the terminal, then add these keys as follows in Settings > Build & deploy > Environment:

- `AIRTABLE_BASE_ID`: your base ID
- `AIRTABLE_API_KEY`: your personal API key
- `AIRTABLE_API_URL`: `https://api.airtable.com/`


Finally, you can run `netlify dev` in the terminal to start both the React server (on port 3000), the functions server (on a random port), and the combined result on port 8888.

## Netlify functions

We started by reading FAC developer-in-residence [Oliver James' article](https://oliverjam.es/blog/we-dont-need-servers/) on running serverless applications entirely in the frontend.

We used the [Airtable.js](https://github.com/Airtable/airtable.js) npm package within [Netlify functions](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions) (i.e. simpler AWS Lambdas) to conduct CRUD operations on our Airtable base without revealing the API key.

*CRUD* = Create Read Update Delete. These actions correspond loosely to the http methods often exposed upon a resource by [RESTful APIs](https://restfulapi.net/) (PUT, GET, POST, DELETE resp.).

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

## Airtable schema

ADD DBDIAGRAM HERE
