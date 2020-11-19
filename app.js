var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var basketsRouter = require('./routes/baskets');
const { timeStamp } = require('console');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/baskets', basketsRouter);

app.delete("api/products/:id", async (req, res) => {
     const deleteProduct = await productsRouter.findByIdAndDelet(req.params.id);
     res.send(deleteProducts);
});

const Order = mongoose.model("order", new mongoose.Schema({
     _id:{
          type: String,
          default: shortid.generate
     },
     email: String,
     name: String,
     address: String,
     total: Number,
     cartItems:[{
          _id: String,
          title: String,
          price: Number,
          count: Number
     },
],
},
{
     timeStamps: true,
}
)
);
app.post("/api/orders", async (req, res) => {
     if (
     !req.body.name ||
     !req.body.email ||
     !req.body.address ||
     !req.body.total || 
     !req.body.cartItems 
     ) {
          return res.send({message:"Data is required."});
     }
const order = await Order(req.body).save();
res.send(order);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));



models.sequelize.sync().then(function(){
     console.log('Database connected!');
});

module.exports = app;
