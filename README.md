# Nightmarebnb

This is a spooky clone of Airbnb.

Nightmarebnb is the place to go to share listings of spots that a user would like to host, and save other's spots in a collection of favorites, for reference for future travels.

## Index

[MVP Feature List](https://github.com/Leahk1m/nightmarebnb/wiki/MVP-(Features)-List)

[Database Schema](https://github.com/Leahk1m/nightmarebnb/wiki/Welcome-to-the-nightmarebnb-wiki!)

## Technologies Used
Javascript  React  Express  Sequelize PostgreSQL  Node JS  Visual Studio Code


# Getting Started
1. Clone this repo
- ```git clone https://github.com/Leahk1m/nightmarebnb.git```
2. Install dependencies from the root directory
- ```npm install```
3. Create a POSTGRESQL user with CREATEDB AND PASSWORD in PSQL.
- ```CREATE USER <name> WITH CREATEDB PASSWORD <'password'>```
4. Create a .env file in the backend directory based on the .env example found within the respective directory.
5. Enter your username and password information into your .env file along with your desired database name, a secure combination of characters for your JWT_SECRET, and your desired PORT(preferably 5000).
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
- ```"proxy": "http://localhost:5000"```
7. Create Database, Migrate, and Seed models
- ```npx dotenv sequelize db:create```
- ```npx dotenv sequelize db:migrate```
- ```npx dotenv sequelize db:seed:all```
8. Start the services in the backend directory
-```npm start```
9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to [http://localhost:3000](http://localhost:3000)

## Features
Logged in users can perform the following actions:
- Add/View/Edit/Delete Spots
- Add/Delete Favorites

All users can perform the following actions:
- View Spots
