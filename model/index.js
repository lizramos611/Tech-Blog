const Blogs = require('./blogs');
const User = require('./user');
//connecting blogs and users
Blogs.belongsTo(User, {
    foreignKey: 'post_writer'
});

User.hasMany(Blogs, {
    foreignKey: 'post_writer',
    onDelete: 'CASCADE',
});

//exporting blogs and users
module.exports = {User, Blogs}; 