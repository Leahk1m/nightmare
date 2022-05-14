# nightmarebnb

![new-nightmare-preview](https://user-images.githubusercontent.com/86897050/168406444-b1134f36-4f9d-404c-b631-fa48e7fefa59.jpg)


[nightmarebnb](https://nightmarebnb.herokuapp.com/) is a travel-based web application inspired by Airbnb, in which users can host haunted houses and discover other haunted listings all around the world - which can be favorited and saved for future reference.

# Technologies Used

nightmarebnb is built on a React / Redux frontend, a Javascript / Express backend, and a PostgreSQL database.

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>


## Getting started

1. Clone this repository
   ```git clone git@github.com:Leahk1m/nightmarebnb.git```

2. CD into the backend directory and install dependencies

    ```npm install```
    
3. CD into the frontend directory and install dependencies

    ```npm install```
    
4.  Create a .env file in the root directory based on the .env.example given
      

5.  Create a user in psql based on your .env DATABASE_URL app_name

    ```psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"```

6.  Create a databse in psql based on your.env DATABASE_URL app_db_name

7. Create the database, migrate, and seed

    ```npx dotenv sequelize db:create```

    ```npx dotenv sequelize db:migrate```

    ```npx dotenv sequelize db:seed:all```
    
 8. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:

	```npm start```
  
  
  # Features
  
