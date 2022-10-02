# README

This is the readme file for Group 5's Restaurant Ordering System

## General Setup - For Running the Application

Steps for getting the project running

1. CD into the frontend folder in a new terminal window
2. Run `npm install` (to install frontend libraries)
3. In a new terminal window CD into the backend folder.
4. Run `npm install` (to install backend libraries)
5. Within the frontend folder `run npm start` (which will build the application on your local machine)
6. Within the backend folder, run `npm start` OR `npm run dev` (which will build the backend api on your local machine)

> .env files are needed for the Frontend and Backend (TO DO for R2, configure the pipeline to read and use stored env variables for deployment).

### Branching Strategy
For the branching stratergy, we utlized feature branches for our features which were merged into the main branch upon completion
The approach used is detailed below:

1) Before working on a new feature, perform a `git pull` from the main branch to fetch and sync your machine with the latest changes.
2) Once pulled, create a new feature branch for your features with the following naming convention `[Name Intials-Feature]`
3) Once the branch has been created and the feature has been developed, the group member will push their changes to GitHub and create a corresponding PR (Pull Request) into Main.
4) Once the PR has been created, the team member should provide a corresponding title and description of their PR as well as assigned group members to the PR for review.
5) Once the PR has been reviewed and the corresponding pipeline checks and unit tests have passed, members should merge into main and repeat steps 1 - 5 for their next feature.


## Testing
To ensure that the features developed are working as intended, we created corresponding unit tests for our features. 
To create the unit tests
1)
2)
3)

To run the unit tests
1) To run the tests locally, simply run `npm run tests` which will run all the test files
2) To run the tests within the pipeline, upon all code pushes, pull requests and merges, the pipeline will execute and run all the test files (as a part of the pipeline configuration)

To view the results of the tests
1) Locally, this will be displayed within the terminal, since after running the tests, members will be shown the results of the tests in a report based format.
2) Within the pipeline, the results of the tests will be displayed within the `Test Run` section of the pipeline.
