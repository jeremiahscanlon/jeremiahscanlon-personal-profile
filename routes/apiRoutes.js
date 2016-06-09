// require the sequelize models
var contacts = require('../models/contacts.js');

// routes
module.exports = function(app){

	app.get('/api/allContacts', function(req, res){
		contacts.findAll({}).then(function(result){
			res.json(result);	 
		});
	});

};