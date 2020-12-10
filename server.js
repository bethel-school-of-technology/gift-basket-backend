import express from 'express';
import cors from 'cors';
import data from './data';
import mongoose from 'mongoose';


mongoose.connect(/*config.MONGODB_URL,*/
     `mongodb+srv://dbuser:Password1!@cluster0.dgarq.mongodb.net/Giftbasket?retryWrites=true&w=majority`, { 
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true
}).then(() => {
     console.log("Connected to mongodb.");
})
.catch((error) => {
     console.log(error.reason)
});

const app = express();
app.use(cors());
app.get('/api/products', (req, res) => {
     res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
     const product = data.products.find((x) => x._id === req.params.id);
     if (product) {
          res.send(product);
     } else {
          res.status(404).send ({ message: 'Product Not Found!' });
     }
})
//var createError = require('http-errors');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var models = require('./models'); 

//Set up default mongoose connection
//var mongoDB = 'mongodb://127.0.0.1/my_database';

 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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

/* const Order = mongoose.model("order", new mongoose.Schema({
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
); */
/* app.post("/api/orders", async (req, res) => {
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
 */
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("serve at http://localhost:4000"));



/* models.sequelize.sync().then(function(){
     console.log('Database connected!');
}); */

module.exports = app;
