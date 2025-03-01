// learning stream in nodejs 

const http = require('http');
const fs = require('fs');

const PORT = 8000
const file ="data.txt";
const SERVER = http.createServer((req, res)=>{
    if(fs.existsSync(file)){
        // const   
        const filer =fs.readFileSync(file);
        res.end(filer);
    }else{
        res.end("somethings went wrong");
    }
        
});

SERVER.listen(PORT, ()=>{
    console.log("server is running");
})