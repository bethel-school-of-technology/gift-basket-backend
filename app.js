var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
//var models = require('./models');

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT,
     {useNewUrlParser: true},
     {useCreateIndex: true},
     {useUnifiedTopology: true}
     );

//Import my route files
var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');
var authRouter = require('./routes/auth');

//jJkyB13spuxMLIjE

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
     res.send("Hello");
})

//Second part of my routes addition
app.use('/users', usersRouter);
app.use('/orders',ordersRouter);
app.use('/auth', authRouter);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
     console.log("We are in!");
});

module.exports = app;
