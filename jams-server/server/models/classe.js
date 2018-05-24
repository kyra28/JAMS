module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classe', {
    id_classe: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: false,
    }
  }, {
    tableName: 'classe'
  });
};