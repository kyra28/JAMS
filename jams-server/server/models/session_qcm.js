module.exports = function(sequelize, DataTypes) {
  return sequelize.define('session_qcm', {
    id_session: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cle: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    id_qcm: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qcm',
        key: 'id_qcm'
      }
    },
    id_classe: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'classe',
        key: 'id_classe'
      }
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'session_qcm'
  });
};