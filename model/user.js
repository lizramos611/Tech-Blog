const {Model , DataTypes } = require('sequalize');
const sequalize = require("../config/connection");
const bcrypt = require('bcrypt');
const { userInfo } = require('os');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

userInfo.init ({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sequalize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'user',
});

module.exports = User;