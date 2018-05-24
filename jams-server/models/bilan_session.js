module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bilan_session', {
    id_etudiant: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'etudiant',
        key: 'id_etudiant'
      }
    },
    id_session: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'session_qcm',
        key: 'id_session'
      }
    },
    note: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'bilan_session'
  });
};