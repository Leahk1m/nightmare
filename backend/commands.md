

Spot Model and Seed-----------------------------------

npx sequelize model:generate --name Spot --attributes userId:integer,address:string,city:string,state:string,country:string,name:string,price:decimal,imageUrl:string


npx sequelize seed:generate --name SpotsSeeds

Favorites Model and Seed -----------------------------
npx sequelize model:generate --name Favorite --attributes spotId:integer,userId:integer



DB migrate/undo migrate -----------
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all


Seed/Unseed---------------------
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all


To drop and create db -----------
npx dotenv sequelize db:drop
npx dotenv sequelize db:create
