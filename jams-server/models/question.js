module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    id_question: {
      type: DataTypes.INTEGER(11),
      auto_increment: true,
      allowNull: false,
      primaryKey: true
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
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      
    },
    valeur: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'question'
  });
};