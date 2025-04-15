import fs from "fs";
const callBackWriter = () =>{
fs.writeFile("dataCallback.csv","This is the callback file",(err)=>{
    if(err){
        console.log("Unable to write(Callback)",err);
    } else{
        console.log("File has been written successfully");
        
    }
})
}
callBackWriter()
 const callbackReader=()=> {
    fs.readFile("./datacallback.csv","utf-8",(err,data) => {
        if (err){
            console.log("unable to read data.(callback)",err);

        } else {
            console.log("data is: ",data);
        }
    })
 }
 callbackReader()
 export default{ callBackWriter,callbackReader};
 