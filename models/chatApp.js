const Sequelize = require("sequelize");
const sequelizeDb = require("../util/chatAPP");

const ChatMsg = sequelizeDb.define("chatapp", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
 chat: {
    type: Sequelize.STRING,

  },
});
module.exports = ChatMsg;
