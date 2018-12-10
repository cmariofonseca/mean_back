const mongoose = require('mongoose');
const URL = 'mongodb://localhost/back';

// mongoose.connect(URL)
mongoose.connect(URL, { useNewUrlParser: true }).then(db => {
  console.log('db is connected');
}).catch(error => {
  console.error(error);
});

module.exports = mongoose;
