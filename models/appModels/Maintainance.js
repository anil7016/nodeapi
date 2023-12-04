const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const maintainanceSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
maintainanceSchema.plugin(require('mongoose-autopopulate'));
maintainanceSchema.index({
  name: 'text',
  amount: 'text',
});

module.exports = mongoose.model('Maintanance', maintainanceSchema);
