const http=require("https")
const server=htpp.createServer((res,req)=>{
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("hello world")
})
const PORT=process.nextTick.PORT ||3000;
ServerClosedEvent.listen(PORT,()=>console.log("server is running"))