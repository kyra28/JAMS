module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reponse', {
    id_reponse: {
      type: DataTypes.INTEGER(11),
      auto_increment: true,
      allowNull: false,
      primaryKey: true
    },
    id_question: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'question',
        key: 'id_question'
      }
    },
    reponse: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      
    },
    vrai_faux: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'question'
  });
};