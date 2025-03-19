const mongoose =require('mongoose')

const cartSchema = mongoose.Schema({
    userId:String,
    items:[
        {
            productId:String,
            name:String,
            price:String,
            // quantity : Number,
        }
    ]
})
module.exports = mongoose.model('Cart',cartSchema)