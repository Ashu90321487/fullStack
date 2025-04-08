import fs from "fs"
const sysncwriter = ()=>fs.writeFileSync("./data.csv","this is the sysnc file")
//fs.writeFileSync("./data.csv","this is the sysnc file modified")
//read file(sync)
const syncreader =()=>{
const fileData = fs.readFileSync("./data.csv","utf-8");
console.log(fileData);
}


//append file(sync)
const syncappend=()=>fs.appendFileSync("./data.csv","utf-8");
//fs.appendFileSync("./data.csv","this is the line 3 ");
fs.appendFileSync("./data.csv","\nthis is the line 3 ");

// delete (sync)
// fs.unlinkSync("./data.csv");
const syncdelete=()=>fs.unlinkSync("./data.csv");
export default {syncreader,sysncwriter,syncappend,syncdelete}