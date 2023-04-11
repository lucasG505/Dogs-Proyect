const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
    },
    image: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    heigthMax: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isNumeric:true
      }
    },
    heigthMin: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isNumeric:true
      }
    },
    weightMax: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isNumeric:true
      }
    },
    weightMin: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isNumeric:true
      }
    },
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true,
    }
  }, {timestamps:false});
};
