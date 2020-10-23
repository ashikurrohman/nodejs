const http = require('http')

const server  = http.createServer((req,res)=>{
    res.end('<h1>Welcome to my NodeJS server</h1>')
})

server.listen('11111',()=>{
    console.log('Our Server is running')
})

