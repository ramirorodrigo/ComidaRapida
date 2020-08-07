const mongoose=require('mongoose');
moongose.connect('mongodb+srv://jhessi:<password>@seminariodb.m4lxl.gcp.mongodb.net/test').then(()=>{
    console.log('sucess db');
}).catch((err)=>{
    console.log(err);
})
mongoose.set('userFindAndModify,false');
module.exports=mongoose;