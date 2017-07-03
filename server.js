const express = require ('express');
const mongoose = require('mongoose'); 
const dbRoutes = require('./routes/databaseAccess.js')
const bodyParser = require('body-parser');
const app = express(); 

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// intercept OPTIONS method
	if ('OPTIONS' == req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
};

// function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// }

// This line makes the build folder publicly available.
app.use(express.static('build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(allowCrossDomain);
app.use('/db', dbRoutes)

// mongoose
mongoose.connect(process.env.MONGODB_URI);

app.listen(3000, () => {console.log('Listening on port 3000!')})

