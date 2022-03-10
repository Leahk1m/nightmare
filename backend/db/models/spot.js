'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      allowNull: false,
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
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};
