 const express = require('express');
 const mssql = require('mssql');
 const app = express();
 const sql = require('mssql')

 async () => {
     try {
         // make sure that any items are correctly URL encoded in the connection string
         await sql.connect('Server=tamatbalink.c9za9b4bo1zg.us-east-1.rds.amazonaws.com,1433;Database=tamatbalink;User Id=TAMAR;Password=TAMAR1277;Encrypt=true')
         //const result = await sql.query`select * from mytable where id = ${value}`
         console.dir(result)
     } catch (err) {
         // ... error checks
     }
 }
 app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
  });
  
  router.get('/', function (req, res) {
    res.send('Hello World!');
  });


  
  router.post('/', function (req, res) {
    res.send('POST to Hello World!');
  });

  module.exports = router;  



  const PersonData = new PersonData({
     personId:Number, 
    firstName: String,
    lastName: String,
    phNumber: phNumber,
    city: String,
    country: String
 });


 







