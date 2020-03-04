const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    desc: String,
    tarih:[{mess1:String,mess2:String}]
});

module.exports = mongoose.model("book", BookSchema);

// Şimdi route klasörüne gidip bu modeli kullanacağız