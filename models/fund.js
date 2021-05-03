const mongoose = require ('mongoose')

const fundSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true},
        img: String,
        address: String, 
        amount: {type: Number, required: {$gt: 0}}
    },
    {timestamps: true}
)
    

const Fund = mongoose.model('Fund', fundSchema)
module.exports = Fund;

