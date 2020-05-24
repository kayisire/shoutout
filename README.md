![node](https://img.shields.io/node/v/express) ![npm](https://img.shields.io/npm/v/npm) [![CodeFactor](https://www.codefactor.io/repository/github/kayisire/shoutout/badge)](https://www.codefactor.io/repository/github/kayisire/shoutout) [![CircleCI](https://circleci.com/gh/kayisire/shoutout/tree/master.svg?style=svg)](https://circleci.com/gh/kayisire/shoutout/tree/master)

# SHOUTOUT

We really can't find how to describe this thing. But it's gonna be huge one day. Give it time!

---

## Technologies, Frameworks and other tools used

- Node.js
- Express.js
- npm

## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

## Folder Structure

    .
    ├── config              # DB configurations
    ├── controllers         # Controlling the flow of logic & data manipulation
    ├── middlewares         # Chained functions called by the routes before the user-defined handler is invoked
    ├── models              # Classes that map to the data relation
    ├── routes              # Route endpoints
    ├── tests               # Test cases
    ├── utils               # Contains utilities files
    ├── app.js              # Main Server File
    ├── .env                # Secret Key Storage
    ├── package.json        # Project's Metadata
    └── README.md

## Installation Guide

To work on this project you must have Node.js installed locally. You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

    $ git clone https://github.com/kayisire/shoutout
    $ cd shoutout
    $ cp .env.example .env
    $ npm i

## Running Project

    $ npm run dev

## Testing the project

    $ npm run test

## Commit Drill

    1. Create a new branch,
    2. Name it according the convention (feature_action),
    3. Push on the branch,
    4. Create a pull request on staging,
    5. Wait patiently for the final judgement. ;)

## Commit Messages Rules

    [Title of commit :: Required] // Fix: Minor typo in code
    [Body of changes :: Required] // They was a typo in the User Model at line 102
    [Footer :: Optional]          // Issue #12

# Contributors

- [Magnific](https://github.com/Magnific7)
- [Kay](https://github.com/kayisire)
