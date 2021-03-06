require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors')
const routes = require('./routes')


const { seedDb } = require('../src/utils/seed');
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium-clone-with-mern"

// DB
mongoose.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
   .then(async () => {
      console.log('Connected to mongodb');

      const User = require('../src/models/User')
      if (!await User.exists({})) {
         await seedDb();
      }
   })
   .catch(console.log);

// CORS
const corsOptions = {
   origin: function (origin, callback) {
      return callback(null, true);
   }
}

const app = express();
app.use(cors(corsOptions));
app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PASSPORT
app.use(passport.initialize());
require('./services/jwtStrategy');
require('./services/facebookStrategy');
require('./services/googleStrategy');
require('./services/localStrategy');

// ROUTES
app.use('/', routes);


let port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log(`Server started at port: ${port}`);
})

