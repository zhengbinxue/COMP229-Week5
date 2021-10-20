import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClothingSchema = new Schema({
    name: String,
    brand: String,
    category: String,
    colour: String,
    size: String,
    price: Number
},
{
    collection: "clothing"
});

const Model = mongoose.model("clothing", ClothingSchema);
export default Model;