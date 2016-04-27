var mongoose = require('mongoose'),
    Supermodel = require('../models/supermodel');

module.exports = function() {
  return {
    getAll : function(req, res) {
        var query = Supermodel.find({});
        query.exec(function(err, supermodels){
          if(err) res.send(err);
          res.json(supermodels);
        });
    },
    post : function(req, res) {
        var newSupermodel = new Supermodel(req.body);
        newSupermodel.save(function(err, data){
          if(err) {
            console.log(err);
          } else {
            console.log('SUCCESS! saving data', data);
            res.json(data);
          }
        });
    },
    getOne: function(req, res) {
        Supermodel.findById(req.params.id, function(err, supermodel) {
          if(err) res.send(err);
          res.json(supermodel);
        });
    }
  };
};
