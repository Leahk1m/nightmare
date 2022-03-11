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
    Spot.belongsTo(models.User, { foreignKey: 'userId'});
    Spot.hasMany(models.Favorite, { foreignKey: 'spotId' });

  };
  return Spot;
};
