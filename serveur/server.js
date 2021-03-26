 var bodyParser = require('body-parser');
 express=require('express');
 mongoose=require('mongoose');
const myrouter=require('./routes/route.js');
require('dotenv').config();

const connection=()=>
  {
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,useUnifiedTopology: true}).then(
    console.log('server connected!...'))
    .catch((err)=>console.log(err)) 
    return connection;
}




App=express();
App.use(bodyParser.json());
App.use('/',myrouter)
connection();
const port=5000


 App.listen(port)



