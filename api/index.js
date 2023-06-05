const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require ('./models/users');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

const salt = bcrypt.genSaltSync(10);


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());

mongoose.connect('mongodb+srv://Gonzaviss:CODIgon2023@cluster0.k5xxe18.mongodb.net/?retryWrites=true&w=majority');

app.post('/register',async (req,res) => {
    const {username,password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password,salt),});
        res.json(userDoc);
    } catch(e){
        res.status(400).json(e);
    }
});

app.post('/login',async (req,res) => {
 const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  if (userDoc!= null){
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json({
            id:userDoc._id,
            username,
          });
        });
  }else {
    res.status(400).json('wrong credentials');
  }
  }
});

app.listen(4000);


