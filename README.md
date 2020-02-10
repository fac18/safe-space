# Safe Space

A project for the MU.

## Installation and architecture

Clone this repo, navigate into the directory and run `npm i`,

In order to run the app, you'll need to have the Netlify CLI installed. You can do this globally on your machine by running `npm i -g netlify-cli`.

We then run `netlify dev` to start both the React server (on port 3000), the Functions server (on a random port), and the combined result on port 8888.

## Netlify functions

We started with FAC developer-in-residence [Oliver James' article](https://oliverjam.es/blog/we-dont-need-servers/) on using Netlify functions to run serverless applications with secrets.

We are using the [Airtable.js](https://github.com/Airtable/airtable.js) npm package within Netlify Functions (i.e. AWS Lambdas) to conduct CRUD operations on our Airtable base without revealing any secrets.

[This article](https://medium.com/swlh/up-and-running-with-netlify-airtable-and-react-428959473cf0) explains set up, while [this is a useful resource](https://flaviocopes.com/airtable/) for understanding how to interact with the base using this package.
