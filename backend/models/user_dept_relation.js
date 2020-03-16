/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_dept_relation', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_details',
        key: 'id'
      }
    },
    dept_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
    }
  }, {
    tableName: 'user_dept_relation'
  });
};
