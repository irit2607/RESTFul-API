const express = require('express');
const mongoose = require('mongoose');
const url = require('./config/mongoKey');
const app = express();



//connect to mongo
mongoose.connect(url, { useNewUrlParser :true, useUnifiedTopology :true, useFindAndModify: false, useCreateIndex : true, }).then(() => console.log("Connected !"),);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Started on PORT : " + PORT,),);