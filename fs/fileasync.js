import fs from "fs/promises";

const asyncwriter = async()=>{
  await  fs.writeFile("./dataasync.csv","this is a async file.");
  console.log("file has been written successfully.(async");
} catch (error){
    console.log("unable to write file.(async)",error);
 }
 
    
asyncwriter();