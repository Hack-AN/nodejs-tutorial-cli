'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormQuestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const options = models.FormQuestionOptions
      options.belongsTo(FormQuestions)
      FormQuestions.hasMany(options)
    }
  };
  FormQuestions.init({
    googleFormId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    questionType: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FormQuestions',
  });
  return FormQuestions;
};