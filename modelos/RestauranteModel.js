var mongoose = requiere("mongoose");
var Schema = mongoose.Schema;
var restauranteSchema = new Schema({
    Nombre:String,
    Nit: Number,
    Propietario:String,
    Calle:String,
    Telefono: Number,
    //Log:,
    //Lat:
    //logo: 
    fechaderegistro: Date,
    //fotolugar: ,
});
module.exports =mongoose.model('restaurante', restauranteSchema);
