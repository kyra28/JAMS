module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etudiant', {
    id_etudiant: {
      type: DataTypes.INTEGER(11),
      auto_increment: true,
      primaryKey: true,
    
    },
    adresse: {
      type: DataTypes.STRING(255),
      allowNull: false,
        unique : true,
      primaryKey: false
    }
  }, {
    tableName: 'etudiant'
  });
};