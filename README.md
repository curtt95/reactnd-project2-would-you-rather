# Would You Rather Project - Curtis Thompson

This is my submission for project 2 of my React Nanodegree - Would You Rather. Would You Rather is a game whereby users can ask each other questions, where questions have a
possible 2 answers. These polls will then help decide which is the most popular choice by users. An example is:

Would You Rather...
1 - Be a back end developer
2 - Be a front end developer

After voting users will then be able to see the results of the questions. 

There will also be a leaderboard - users will be ranked on the following in descending order:

Score = (number of questions asked) + (number of questions answered)

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file
├── public
│   ├── favicon.ico # React Icon
│   └── index.html 
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── actions
    │   ├── authedUser.js # actions for authentication
    │   ├── questions.js # actions for questions
    │   ├── shared.js # shared actions
    │   └── users.js # actions for users
    ├── components
    │   ├── App.js # This is the root of your app. Contains static HTML right now.
    │   ├── Avatar.js # Displays a users avatar
    │   ├── Leaderboard.js # Leaderboard components to show ranking
    │   ├── LeaderboardItem.js # Leaderboard item for user
    │   ├── Loading.js # Loading bar   
    │   ├── Login.js # Login component
    │   ├── Nav.js # Navigation at top component
    │   ├── NewQuestion.js # Create new poll question
    │   ├── NotFound.js # 404 Not Found component
    │   ├── Question.js # Question on home page component
    │   ├── QuestionInfo.js # Specific question information component
    │   ├── QuestionList.js # List of questions on home page
    │   ├── QuestionResults.js # Results of poll
    │   ├── Score.js # The users score component
    │   └── VoteQuestion.js # Vote in a poll form component
    ├── middleware
    │   ├── authedUser.js # middleware for authedUser
    │   ├── index.js # middleware combiner
    │   └── logger.js # logs all changes to state in console
    ├── reducers
    │   ├── authedUser.js # reducer for authedUser
    │   ├── index.js # middleware combiner
    │   ├── questions.js # reducer for questions
    │   └── users.js # reducer for users
    ├── utils
    │   ├── _DATA.js # data json file
    │   └── api.js # api file

TODO

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute         | Type             | Description           
|-------------------|------------------|-------------------         
| id                | String           | The user’s unique identifier 
| name              | String           | The user’s first name  and last name     
| avatarURL         | String           | The path to the image file 
| questions         | Array            | A list of ids of the polling questions this user created
| answers           | Object           |  The objects keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute         | Type   | Description 
|-------------------|--------|-------------------
| id                | String | The question’s unique identifier 
| author            | String | The author’s unique identifier 
| timestamp         | String | The time when the question was created
| optionOne         | Object | The first voting option
| optionTwo         | Object | The second voting option

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description 
|-----------|--------|-------------------
| votes     | Array  | A list that contains the id of each user who voted for that option
| text      | String | The text of the option 

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
