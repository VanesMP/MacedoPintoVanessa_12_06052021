# Openclassrooms's project 12: Build an analytics dashboard with React 

## 1. General information
This repo contains all the source code to install and lauch the project

## 2. Getting started

### Prerequisite
- NodeJS Version 14.18.0
- Yarn Version 1.22.18
- Visual Studio Code or another IDE

### Dependencies
- React Version 17.0.2
- React-dom Version 17.0.2
- React-router-dom Version 6.2.2
- Recharts Version 2.1.9

## 3. Launching the project

### 3.1 Backend Api
- [ ] Fork the repository of backend api : https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
- [ ] Clone it on your computer : git clone
- [ ] Install the dependencies: yarn install
- [ ] Run the micro-api on port 3000 by default : yarn start

:sparkles: Magic happens on port 3000 :sparkles:

### 3.2 Front-end app
- [ ] Clone this repository on your computer : https://github.com/VanesMP/MacedoPintoVanessa_12_06052021
- [ ] Install the dependencies : npm install
- [ ] Run the Backend api on port 3000 by default : npm start
- [ ] You will see this message : Something is already running on your port 3000. Would you like to run the app on another port instead (Y/N)
- [ ] Type Y
- [ ] The application run on http://localhost:3001

## 4. Endpoints
### 4.1 Possible endpoints
This project includes four endpoints that you will be able to use:

- http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
- http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
- http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

### 4.2 Examples of queries
- http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
- http://localhost:3000/user/18 - Retrieves user 18's main information.

:warning: **Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**
