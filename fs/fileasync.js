import { log } from "console";
import fs from "fs/promises";
const asyncwriter = async()=>{
     try{await fs.writeFile("./dataasync.csv","This is the async file.");
         console.log("File has been written successfully.(async)"); 
     }catch(error){
         console.log("unable to write file.(async)",error);
    }
}
const asyncreader = async() =>{
        const fileData = await fs.readFile("./dataasync.csv","utf-8");
        return fileData;
}
    
asyncwriter();
const data = asyncreader();
console.log(data);