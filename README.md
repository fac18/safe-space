# Safe Space

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c6fdabe-1590-4128-bdb4-f981780281bf/deploy-status)](https://app.netlify.com/sites/safespacemu/deploys) | ![Travis Status](https://travis-ci.com/fac18/safe-space.svg?branch=master) | [![codecov](https://codecov.io/gh/fac18/safe-space/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/safe-space)

**Authors**: [@redahaq](https://github.com/redahaq) | [@bethanyios](https://github.com/bethanyios) | [@alexandraOM](https://github.com/fac18/safe-space/commits?author=AlexandraOM) | [@groupanimal](https://github.com/groupanimal)

We're a team of four developers working on a _Tech for Better_ project for the [Musicians' Union](https://www.musiciansunion.org.uk/).

Safe Space is a site to make it easier for people in the industry (especially freelance musicians) to report incidents of sexual abuse or harassment at work.

## Installation

### Showcase version

Clone this repo, navigate into the directory and run `npm i`, then `npm start`.

This will run the React app on port 3000 with the survey questions hard coded.

### Full functionality

If you want to work with the backend functionality - that is, to fetch data from and feed data to an Airtable base - you'll need to use [Netlify Dev](https://www.netlify.com/products/dev/) (visit our [stable deploy](https://safespacemu.netlify.com/) to see this in action).

First make sure you have an Airtable base with _Questions_, _Responses_ and _Users_ tables prepared in accordance with the schema defined later in this documentation.

Then, you need to have the Netlify CLI installed. You can do this globally on your machine by running `npm i -g netlify-cli`.

Log in to [Netlify](https://app.netlify.com/) in your browser (if you don't have an account, make one). Then, back in the terminal, run `netlify login` and it'll raise the browser to complete the process.

Now to set up [continous deployment](https://docs.netlify.com/cli/get-started/#continuous-deployment). Assuming your project is associated with a Github repo (for example, as a fork of this project), run `netlify init` to raise the browser, where you'll be prompted to give Netlify access to your Github account. Netlify will then automate set up.

If instead your project is stored locally, deploy direct to Netlify by running `netlify deploy`.

Your Netlify deploy needs access to certain environment variables to connect securely to Airtable. Navigate to your Airtable base, then Help > API Documentation. Here you will find the _base ID_. Then go to your [account page](https://airtable.com/account) and grab your _personal API key_.

Open your site overview on Netlify by running `netlify open` in the terminal, then add these keys as follows in Settings > Build & deploy > Environment:

- `AIRTABLE_BASE_ID`: your base ID
- `AIRTABLE_API_KEY`: your personal API key
- `AIRTABLE_API_URL`: `https://api.airtable.com/`


Finally, you can run `netlify dev` in the terminal to start both the React server (on port 3000), the functions server (on a random port), and the combined result on port 8888.

## Netlify functions

We started by reading FAC developer-in-residence [Oliver James' article](https://oliverjam.es/blog/we-dont-need-servers/) on running serverless applications entirely in the frontend.

We used the [Airtable.js](https://github.com/Airtable/airtable.js) npm package within [Netlify functions](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions) (i.e. simplified AWS Lambdas) to conduct CRUD operations on our Airtable base without revealing the API key.

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

Our Airtable base is not a relational SQL database proper, so this schema (generated with dbdiagram.io) does not map exactly, but is a useful reference.

[![](https://i.imgur.com/UOciiUK.png)](https://dbdiagram.io/d/5e4570b89e76504e0ef16a20)

Some clarifications follow:

- The _Responses_ table has fields for every question in the _Questions_ table, with the name of each field given by the question text; the singular _question_ field in the _Responses_ table above is a shorthand for this 
- Records in the _Users_ table refer to a single report made on the Safe Space platform, rather than to a unique user. Any person using the platform to make multiple reports will recieve a unique reference every time, so will only be identifiable as a repeat user if they also provide the same email on multiple occasions
- The _id_ field in each table in the schema is represented in Airtable by the serial integer field which is automatically part of every table. When you make a request for records from Airtable, these numbers are decremented by 1 to become the indices of the returned array of records
- The only relation in the schema is between the _responses_ field in the _Users_ table and the _user_ field in the _Responses_ table. This is a 1-to-1 relation in that every response submitted will relate to only one user and visa versa. The respective records will be produced simultaneously

## Security and anonymity

This platform will only be a genuinely 'safe space' if:

- we can ensure that any information submitted is securely stored
- users' anonymity is maintained (unless they knowingly choose otherwise)
- access to the data (for example, by MU staff) is carefully managed
- all of the above facts are transparently communicated to users

Establishing trust is therefore both a UX and a software engineering problem.

### Points of vulnerability

[_Roots of trust_](https://csrc.nist.gov/Projects/Hardware-Roots-of-Trust) is a concept in computer security - it usually refers to hardware with guaranteed security, but we'll borrow it for our purposes. It essentially asks us to consider the different points of vulnerability of a system. If we are satisfied that any of these is sufficiently secure, we can say it is trusted. In this way we can identify the weak points in the overally security of the system, and address them (or failing that, at least make them clear to users).

The following sections consider different so called roots.

#### User's device

A given user's phone or laptop may be compromised (for example, with malware which includes a [keylogger](https://en.wikipedia.org/wiki/Keystroke_logging)). Unfortunately, we have no control over this and so consider is outside the scope of this project.

However, in the case that the user

Resolutions:

-

#### User's email account

Similarly, 


#### Airtable (data at rest)



#### Data in transmission



#### Netlify


