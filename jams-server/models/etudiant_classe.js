module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etudiant_classe', {
    id_classe: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'classe',
        key: 'id_classe'
      }
    },
    id_etudiant: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'etudiant',
        key: 'id_etudiant'
      }
    }
  }, {
    tableName: 'etudiant_classe'
  });
};