var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SupermodelSchema = new Schema({
    name: { type: String, required: true},
    gender: { type: String, required: true},
    picture: { type: Schema.Types.Mixed, required: true},
   // morePictures: Schema.Types.Mixed,
    height: { type: String },
    bust: { type: String },
    waist: { type: String },
    hips: { type: String },
    shoes: { type: String },
    eyes: { type: String },
    hair: { type: String },
    createdAt: { type: Date, default: Date.now}
});

SupermodelSchema.pre('save', function(next) {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('supermodel', SupermodelSchema);
    
