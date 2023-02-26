//const buff=new Buffer(50)
const buff=new Buffer.alloc(50)
buff.write("buffer data is created")//write
console.log(buff.toString())//read

