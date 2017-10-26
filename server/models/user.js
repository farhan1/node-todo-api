var mongoose = require('mongoose');


var User = mongoose.model("Users", {
  email: {
    type: String,
    trim: true,
    required: true,
    minLength: 3
  }
});

module.exports = {User}
