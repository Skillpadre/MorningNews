const mongoose = require('mongoose');

// --------------------- BDD -----------------------------------------------------
// useNewUrlParser ;)
var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
   };

mongoose.connect('mongodb+srv://ChristopheApp:forzaom13@cluster0-yr3gc.mongodb.net/morningnews?retryWrites=true&w=majority',
   options,
   function(err) {
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info('*** Database Morning News connection : Success ***');
    }
   }
);