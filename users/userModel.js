const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const RoleModel = require('../roles/RoleModel');

const grantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  description: String,
});

const GrantModel = mongoose.model('Grant', grantSchema);

// True Linking, refs
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  firstNames: String,
  lastNames: String,
  roles: [{ type: ObjectId, ref: 'Role' }],
  grants: [{ type: ObjectId, ref: 'Grant' }],
});

module.exports = mongoose.model('User', userSchema);

// Subdocuments/Embedded documents - good for one to few and one to one.
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,

//   },
//   firstNames: String,
//   lastNames: String,
//   roles: [roleSchema],
//   grants: [{ name: String, description: String }]
// })
