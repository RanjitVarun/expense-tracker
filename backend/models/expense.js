/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expense', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_details',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dept_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
    },
    cat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    approved_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_details',
        key: 'id'
      }
    },
    tstamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'expense'
  });
};
