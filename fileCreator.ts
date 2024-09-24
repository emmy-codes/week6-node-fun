import fs from "fs";

const data: string = "Hello Node-JS";
fs.writeFileSync("example.txt", data);
console.log("File written successfully");