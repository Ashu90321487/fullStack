// sync ka example hai 
/*const fs=require("fs")
console.log("1")
const data=fs.readFileSync("data.txt","utf-8")
console.log(data);
console.log("2");*/
//  const fs=require("fs")
//  fs.writeFileSync("elce.txt","hi i am hello  of elce")
// async example 2

const fs=require("fs");

fs.readFile("data.txt","utf8",(err,data)=>{
    console.log(data)

    
});


