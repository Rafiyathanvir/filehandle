

	const express = require("express");

	const app = express();

	const fs = require("fs");
  
  
    // Creating object of current date and time 
    // by using Date() 
      
    // Formatting the date and time
    // by using date.format() method
      
    // Display the result
    
fs.writeFile("./database.txt", ` ${new Date()}`,
 function(err){
    if(err) throw err;
    console.log("saved",);
    console.log(new Date())
});

app.get("./newfile",(req,res)=>{
    res.send(new Date())
    console.log(new Date())

})


/*app.get("/getallfiles",(req,res)=>{

fs.readdir("./",function(err,data){
if(err) throw err;
console.log(data)
})
})*/


app.listen(3003);

