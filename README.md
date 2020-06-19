# Safe Space

![Netlify Status](https://api.netlify.com/api/v1/badges/5c6fdabe-1590-4128-bdb4-f981780281bf/deploy-status) | ![Travis Status](https://travis-ci.com/fac18/safe-space.svg?branch=master) | ![codecov](https://codecov.io/gh/fac18/safe-space/branch/master/graph/badge.svg)

**Authors**: [@redahaq](https://github.com/redahaq) | [@bethanyios](https://github.com/bethanyios) | [@alexandraOM](https://github.com/fac18/safe-space/commits?author=AlexandraOM) | [@freemvmt](https://github.com/freemvmt)

We're a team of four developers working on a [_Tech for Better_](https://www.foundersandcoders.com/tech-for-better) project for the [Musicians' Union](https://www.musiciansunion.org.uk/).

Safe Space is a site to make it easier for people in the industry (especially freelance musicians) to report incidents of sexual abuse or harassment at work.

## Contents

- [Problem statement](#problem-statement)
- [The solution](#the-solution)
- [Installation](#installation)
- [Architecture & stack](#architecture-and-stack)
  - [Netlify functions](#netlify-functions)
  - [Airtable schema](#airtable-schema)
- [A week in git](#a-week-in-git)
- [To do](#to-do)
- [License](#license)

## Problem statement

A recent survey by the Musician’s Union revealed that 48% of musicians face sexual harassment and abuse at work, but only 85% feel comfortable to report.

The MU want the industry to be safer for all, and particularly freelance musicians who are often the most vulnerable.

They currently operate a Safe Space email inbox where people can share their experiences and get advice on how to access support services, or potential routes to them.

### For users

Reporting can be a very difficult and this app hopes to make it less daunting experience by asking specific questions

### For the MU

The qualitative nature of the data and human resource required to process and understand it means the MU are not able to gain a sense of overall trends or collate data to enable them to raise awareness or identify and work with specific venues that may be areas of vulnerability.

## Solution

Our solution was to build an app with a mobile and desktop friendly, multi-step form that guides the user to submit only the information they feel comfortable with. This submits report data to a secure store which is easily accessible to MU staff.

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

## Architecture and stack

We decided to build a serverless app with a React frontend and any backend functionality served by Netlify functions (an implementation of AWS Lambdas), and Airtable as a store.

### Netlify functions

We started by reading FAC developer-in-residence [Oliver James' article](https://oliverjam.es/blog/we-dont-need-servers/) on running serverless applications entirely in the frontend.

We used the [Airtable.js](https://github.com/Airtable/airtable.js) npm package within [Netlify functions](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions) (i.e. simplified AWS Lambdas) to conduct CRUD operations on our Airtable base without revealing the API key.

_CRUD_ = Create Read Update Delete. These actions correspond loosely to the http methods often exposed upon a resource by [RESTful APIs](https://restfulapi.net/) (PUT, GET, POST, DELETE resp.).

Here's a figure describing our overall architecture:

![](https://i.imgur.com/l21pLOO.png)

**Resources**

- The [Netlify Dev readme](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlifytoml-dev-block)
- A vid on [serverless lambda functions](https://www.youtube.com/watch?time_continue=794&v=drJwMlD9Mjo&feature=emb_title)
- [This article](https://medium.com/swlh/up-and-running-with-netlify-airtable-and-react-428959473cf0) explains basic set up of React/Netlify/Airtable combo
- [This is useful](https://flaviocopes.com/airtable/) for understanding how to interact with the base using Airtable.js
- Netlify's own [examples](https://functions.netlify.com/examples/)
- Netlify's own [playground](https://functions-playground.netlify.com/)
- Also, someone has made a [Netlify functions workshop](https://docs.netlify.com/functions/overview/)!

### Airtable schema

Our Airtable base is not a relational SQL database proper, so this schema (generated with dbdiagram.io) does not map exactly, but is a useful reference.

[![](https://i.imgur.com/e4oLMcj.png)](https://dbdiagram.io/d/5e4570b89e76504e0ef16a20)

Some clarifications follow:

- The _Responses_ table has fields for every question in the _Questions_ table, with the name of each field given by the question text; the singular _questionName_ field in the schema above is a shorthand for this
- Records in the _Responses_ table refer to a single report made on the Safe Space platform. Any person using the platform to make multiple reports will recieve a unique reference every time, so will only be identifiable as a repeat user if they also provide the same email on multiple occasions
- The _recordId_ field of each table in the schema is built in to Airtable and not visible in their UI, but accessible via the API. They are 17 characters strings like `rec5Aw88283xE3kvK`
- We did have a separate _Users_ table containing the unique ref and email, with each record having a 1-to-1 relation with a record in _Responses_. We changed this because [Airtable recommends managing such a relation](https://support.airtable.com/hc/en-us/articles/218734758) by co-locating all such data in the same table
- In the _Questions_ table, if the _split_ field is populated (with the text from another question) this indicates that the associated question should only be shown if the response to the referenced question is one of the options given in _condition_
- It is important that there are no empty records in the tables - these will break the logic of the site

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

// resolutions

#### User's email account

// email treatment

Resolutions:

- Prompt users to consider the security of any email they submit, and provide guidance for making an anonymous one just for this purpose

#### Airtable

Airtable have a [full treatment of their security protocols](https://airtable.com/security) on their website, which seemed satisfactory as far as we could tell. For example, they encrypt data both in transmission via https (256-bit TLS) and whilst 'at rest' on their servers (AES 256), their data centres meet ISO 27001 standards, and they commission external penetration tests and run a [bug bounty programme](https://hackerone.com/airtable).

Resolutions:

- Encourage our product owner and anyone at the MU with access to the Airtable to implement strong passwords and 2FA ([two-factor authentication](https://support.airtable.com/hc/en-us/articles/219409917))

#### Data in transmission

// airtable API treatment

#### Netlify

// https://www.netlify.com/security/

## A Week in Git

We thought we might git together again some time.

![](https://i.imgur.com/bJj2VOT.png)

## To do

- [Progress bar](https://github.com/fac18/safe-space/issues/36)
- Button to skip questions one by one
- Button on section dividers to skip entire sections
- Share button to tweet the website
- Style the inputs
- Fix text styling on section dividers
- Collate all responses on a review page where users can see what they’ve answered for each quetion
- Enable download of collated responses as a PDF file
- Refactor - generally
- [Bug](https://github.com/fac18/safe-space/labels/bug) squashing

## License

We've licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/), which includes the following permissions, conditions and limitations:

![](https://i.imgur.com/vqTARGh.png)

We chose this 'copyleft' license because it enables basically all use cases but additionally requires any derivative code to be licensed similarly, which means a further developed fork can't be privatised and taken out of open source circulation.
