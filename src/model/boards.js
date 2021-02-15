module.exports = (Sequelize, sequelize) => {
    return sequelize.define('boards', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      }
    });
}
