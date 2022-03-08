npx sequelize model:generate --name Spot --attributes userId:integer,address:string,city:string,state:string,country:string,name:string,price:decimal,imageUrl:string


npx sequelize seed:generate --name SpotsSeeds




npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all



npx dotenv sequelize db:seed:all
