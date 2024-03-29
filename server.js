const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controller');

const app = express();
const PORT = process.env.PORT || 3001;


app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now Listening!'))
}); 