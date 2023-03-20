const { Model, DataTypes} = require('sequalize');
const sequalize = require('../config/connection.js');

class Blogs extends Model {}
//adding in title, post and writer
Blogs.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true,
    },

    post_title: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    post_message: {
        DataTypes: STRING,
        allowNull: false,
    },
    post_writer: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    
       
    }, 
    {sequalize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'blogs',}
);
//exporting this as blogs 

module.exports = Blogs;