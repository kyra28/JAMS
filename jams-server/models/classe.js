module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classe', {
    id_classe: {
      type: DataTypes.INTEGER(11),
      auto_increment: true,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
        unique : true,
    }
  }, {
    tableName: 'classe'
  });
};