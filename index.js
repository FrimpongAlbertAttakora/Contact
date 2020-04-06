const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
require('dotenv/config');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))


// Import routes
const contactRoute = require('./server/contact');
app.use('/contact', contactRoute);


// Serving static folder
app.use(express.static(path.join(__dirname, './public'))); 


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