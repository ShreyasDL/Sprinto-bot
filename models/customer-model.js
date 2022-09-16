const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema({
    designation : {type : String, required : true},
    policy_id : {type: mongoose.Types.ObjectId, required : true, ref : 'Policy'}
})

module.exports = mongoose.model('Customer',customerSchema)
