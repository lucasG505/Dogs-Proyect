const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperament', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlpha: true,
            notEmpty: true
        }
      },
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      }
    }, {timestamps:false});
  };