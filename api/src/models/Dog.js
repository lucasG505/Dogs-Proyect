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
      defaultValue: "https://imgs.search.brave.com/tmWdwfGY4XY3A1uh0Dum_5JTFeHjXhEbVGlpgh8sSQE/rs:fit:368:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/UWRWd2lrOTRqeTBu/dnBGR0pvS1dnSGFK/aSZwaWQ9QXBp",
    },
    heightMax: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isNumeric:true
      }
    },
    heightMin: {
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
