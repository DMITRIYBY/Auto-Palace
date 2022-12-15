const express = require('express');
 
const path = "../src/data/cars.json"; 

 const app = express();
 
const arr = require(path)


 app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
 });
 console.log(typeof(JSON.stringify(arr)));

 app.get('/catalog', (req, res) => {
       res.send(arr);
     }
 );
 

 const PORT = 3001;
 app.listen(PORT, () => console.log(`listening on ${PORT}`));