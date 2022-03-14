'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      },
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageUrlTwo: {
      allowNull: true,
      type: DataTypes.STRING
    },
    imageUrlThree: {
      allowNull: true,
      type: DataTypes.STRING
    },
    imageUrlFour: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId'});
    Spot.hasMany(models.Favorite, { foreignKey: 'spotId' });

  };
  return Spot;
};
