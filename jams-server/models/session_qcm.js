module.exports = function(sequelize, DataTypes) {
  return sequelize.define('session_qcm', {
    id_session: {
      type: DataTypes.INTEGER(11),
      auto_increment: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cle: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    id_qcm: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'qcm',
        key: 'id_qcm'
      }
    },
    id_classe: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      references: {
        model: 'classe',
        key: 'id_classe'
      }
    },/*
      id_professeur: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: false,
          references: {
              model: 'professeur',
              key: 'id_prfesseur'
          }
      },*/
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'session_qcm'
  });
};