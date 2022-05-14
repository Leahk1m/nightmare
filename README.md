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
  ## Splash Page & User Authentication
  Users can log into an existing account or sign up. Alternatively, users can test the site with the Demo Login feature.
  
  ![revamped-nightmare-gif](https://user-images.githubusercontent.com/86897050/168408434-d899d40f-8df4-472a-acd1-10dcb62127d7.gif)
  
  ## Unauthenticated User
  The user is able to see all available listings on the application, but are asked to log in or sign up for an account to create a spot, favorite spots,   or see their own spots.
  
  ![pls-login-gif](https://user-images.githubusercontent.com/86897050/168408293-3d0c6712-ecae-41bb-9185-65334dedac1a.gif)
  
  ## User Home Page
  ### Navigation
  The navigation bar displays a profile button in the form of a ghost gif when user is successfully logged in. The user now has access to their spots,     their favorite spots, and are able to list new spots on the application.
  
  ### Hosting New Haunted Spot
  The preview on the form page will update based on the user's inputs, and the image will be replaced with the user's image url, in order to display it     to the host before it is showcased to the world.
  
  ![adding-spot-gif](https://user-images.githubusercontent.com/86897050/168408024-1d2294ed-3309-43fc-bcdb-bbf26fd17fd5.gif)
  
  ### Favorites
  Logged in users can favorite (save) the spots they like the most, for future reference. The user can click on the heart below the spot's details,     which will create a new favorite within their collection. They will be redirected to their favorites page, to see that the spot was successfully saved. 

  ![add-fav-spot-gif](https://user-images.githubusercontent.com/86897050/168408162-a8c9bff5-fea3-4072-b2f0-86d67dd19ac5.gif)

### Updating/Deleting Features
  The heart icon will be filled with color if the spot is already saved to the user's collection, and clicking on it once more will delete it from the     user's favorites. The User can see options to update or delete a spot if it belongs to them. 
![deleting-nightmare-gif](https://user-images.githubusercontent.com/86897050/168408974-cebc12d9-3656-46f9-9ce7-a26279fcbd71.gif)



