const fs = require('fs');

fs.readFile('./test.txt', "utf-8", (err, res)=>{
    if(err){
        console.log("Front-end")
    }
    else{
        console.log("Backend is On!");
        console.log(res);
    }
});

fs.appendFile('./test.txt', "DSA is must required", (err, res)=>{
if(err){
    console.log("Dsa is hard");
}
})

fs.unlink('./test2.txt', (err)=>{
if(err) console.log("No such files")
})

fs.writeFile('./test2.txt', "I wana be a Full-Stack Web Developer" , (err)=>{
    if(err) console.log('No Jobs available')
})

fs.rename('./test2.txt', 'test3.txt', (err)=>{
    if(err){
        console.log('Err')
    }
   
})

fs.readdir('./', 'utf-8', (err, res)=>{
    if(err) {
        console.log("No Files")
    }
    else{
        
    res.forEach((elem)=>{
        console.log(elem);
    })
    }
})