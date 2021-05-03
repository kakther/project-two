const mongoose = require ('mongoose')

const fundSchema = new mongoose.Schema(
    {
        name: String, 
        description: String,
        img: String,
        address: String, 
        amount: Number
    },
    {timestamps: true}
)
    

const Fund = mongoose.model('Fund', fundSchema)
module.exports = Fund;

