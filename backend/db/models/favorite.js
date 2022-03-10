'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER

    }
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    
  };
  return Favorite;
};
