const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', 
  {
    ID:{
      type: DataTypes.STRING(3),
      primeryKey:true,
      validate:{
        leng: [3]
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_band:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    continente:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    area:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    poblacion:{
      type: DataTypes.STRING,
      allowNull:false,
    }
  },{timestamps:false});//Cuando timestamps se establece en false, Sequelize no añadirá automáticamente los campos createdAt y updatedAt al modelo country
};