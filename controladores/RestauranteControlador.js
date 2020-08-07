var mongoose = require("mongoose");
require('../modelos/RestauranteModel.js');
var RestauranteModel=mongoose.model('restaurate');
//agrgar objetos restaurantes al contenedor
exports.addRestaurante=function(req,callback){
    var objrestaurate=new RestauranteModel();
    objrestaurate.Nombre= Req.body.Nombre;
    objrestaurate.Nit= Req.body.Nit;
    objrestaurate.Propietario= Req.body.Propietario;
    objrestaurate.Calle= Req.body.Calle;
    objrestaurate.Telefono= Req.body.Telefono;
    objrestaurate.save(function(err, retorno){
        if(err)callback({estado: {codigo: 2 , respuesta: err.message}});
        callback({estado:{codigo: 1,respuesta:'proceso exitoso'},restaurante: retorno});
    });
 
};
//actualizar
exports.updateRestaurante=function(req,res){
    RestauranteModel.findById(req.params.id,function(err,restauranteBuscado){
        retorno.Nombre= Req.body.Nombre;
        retorno.Nit= Req.body.Nit;
        retorno.Propietario= Req.body.Propietario;
        retorno.Calle= Req.body.Calle;
        retorno.Telefono= Req.body.Telefono;
        restauratebuscado.save(function(err, resultadoUpdate){
            if(err)callback({estado: {codigo: 2 , respuesta: err.message}});
            callback({estado:{codigo: 1,respuesta:'proceso exitoso'},restaurante: retorno});
        });
    });
};
//eliminar
exports.deleteRestaurante=function(req,callback){
    RestauranteModel.findById(req.params.id,function(err,restauranteBuscado){
        restauratebuscado.remove(function(err){
            if(err)callback({estado: {codigo: 2 , respuesta: err.message}});
            callback({estado:{codigo: 1,respuesta:'proceso exitoso'},restaurante: retorno});
        });
    });
    
};
//buscar una persona por id
exports.fibdRestaurante=function(req,res){
    RestauranteModel.findById(req.params.id,function(err,restauranteBuscado){
        restauratebuscado.remove(function(err){
            if(err)callback({estado: {codigo: 2 , respuesta: err.message}});
            callback({estado:{codigo: 1,respuesta:'proceso exitoso'},restaurante: retorno});
        });
    });
};
//listar todas las personas del contenedor
exports.findAllRestaurante=function(req,res){
    RestauranteModel.find({}, function(err,restaurantesBuscados){
            if(err)callback({estado: {codigo: 2 , respuesta: err.message}});
            callback({estado:{codigo: 1,respuesta:'proceso exitoso'},restaurante: retorno});
        });
    };
