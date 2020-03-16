/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prod', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cat',
        key: 'id'
      }
    }
  }, {
    tableName: 'prod'
  });
};
