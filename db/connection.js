const mongoose = require('mongoose');
require('dotenv').config()

//testing branch

// Use a ternary that looks for the presence of a `NODE_ENV` environmental variable
// If `NODE_ENV` is set to `production`, use the URI for our database stored in the
// `MONGODB_URI` environmental variable.  If not, just use the local db address.
const mongoURI = process.env.DATABASE_URL
  process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL
    : 'mongodb://localhost/back-end';

// Use Mongoose's connect method to connect to MongoDB by passing it the db URI.
// Pass a second argument which is an object with the options for the connection.

  mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));


// Export the connection so we can use it elsewhere in our app.
module.exports = mongoose;