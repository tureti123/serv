const http=require("http")
const server=http.createServer((res,req)=>{
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("hello world")
})
const PORT=process.nextTick.PORT ||3000;
server.listen(PORT,()=>console.log("server is running"))