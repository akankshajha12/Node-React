const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

require ('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use (express.json());


mongoose.connect('mongodb+srv://Akanksha12:Akanksha12@cluster0-kirnc.gcp.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
    console.log("connected to db")
}).catch(function(){
    console.log("not able to connect to db")
})

const exerciseRouter = require ('./routes/exercises')
const usersRouter = require('./routes/users')   

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)


app.listen(port , () => { console.log ('Server is running at : ',port);
})