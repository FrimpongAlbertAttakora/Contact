const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

// Middlewares
require('dotenv/config');
app.use(cors());

// Body Parser Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Serving static folder
app.use(express.static(path.join(__dirname, '/pub'))); 


// Import routes
const contactRoute = require('./server/contact');
app.use('/contact', contactRoute);


// Connect to DB
mongoose.connect( 
    process.env.DB_CONNECTION, 
    {  useNewUrlParser: true ,
       useUnifiedTopology: true, 
    },
    () => console.log('Connected to DB')
);

const port = process.env.PORT || 9900;
app.listen(port, () => console.log(`server started on port ${port}`));