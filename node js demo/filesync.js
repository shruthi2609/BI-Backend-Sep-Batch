const fs=require("fs")
//read - sync

console.log(fs.readFileSync("./jobseekers.txt","utf-8"))

//write - sync
const data="this is the  data"
fs.writeFileSync("./jobseekers.txt",data)

const newdata="\n this is a new line"
fs.appendFileSync("./jobseekers.txt",newdata)