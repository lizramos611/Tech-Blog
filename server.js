const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequalize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequalize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now Listening!'))
}); 