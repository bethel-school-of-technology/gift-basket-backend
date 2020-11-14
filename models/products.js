"use strict";
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define(
    "products",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      quantity:{
        type: DataTypes.INTEGER
      },
      availableSizes: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );

  return products;
};
