module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professeur', {
    adresse: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique:true,
      primaryKey: false
    },
    id_professeur: {
      type: DataTypes.INTEGER(11),
      auto_increment: true,
      allowNull: false,
      primaryKey: true,
      
    },
    mdp: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
    }
  }, {
    tableName: 'professeur'
  });
};