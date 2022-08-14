const fs = require('fs');
const yargs = require('yargs');
let command = yargs.argv._[0];

let a = yargs.argv._[1]
let b= yargs.argv._[2]

if(command==='add'){
    console.log(a+b) 
}

else if(command==='subs'){
    console.log(a-b) 
}

else if(command==='multi'){
    console.log(a*b) 
}

else if(command==='divide'){
    console.log(a/b) 
}

else if(command==='sin'){
    console.log(a+b) 
}

else if(command==='cos'){
    console.log(a+b) 
}

else if(command==='tan'){
    console.log(a+b) 
}

else if(command==='random'){
    console.log(a+b) 
}


// learning:  
//  we learn how to create node js working enviornment
//  we leran how to create functions in node.js and learned use of yargs
//  Yargs is used for handleing the operations from terminal itself.


            