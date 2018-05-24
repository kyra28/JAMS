module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qcm', {
    id_qcm: {
      type: DataTypes.INTEGER(11),
      auto_increment: true,
      primaryKey: true
    },
    id_professeur: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'professeur',
        key: 'id_professeur'
      }
    },
    nom: {
      type: DataTypes.STRING(255),
        unique:true,
      allowNull: false
    }
  }, {
    tableName: 'qcm'
  });
};