const { readFileSync } = require("fs");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer((req, res) => {
  if (req.url !== "/") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  // reload the file every time
  const content = readFileSync("index.html");
  const length = Buffer.byteLength(content);

  res.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": length,
  });
  res.end(content);
});

const io = new Server(httpServer, {
  // Socket.IO options
});


//Server on? Client emit
//Server emit? Client on 
//Server broadcast emit?  Cleint on 

//More in ...sMHiSession::_connect
io.on("connecting", (socket) => {

  console.log(`connect ${socket.id}`);

  socket.emit("connect", (reason) => {
    console.log(`connect ${socket.id} due to ${reason}`);
  });

  //
  console.log(`connect ${socket.id}`);
  socket.on("heartbeat", (reason) => {
    console.log(`heartbeat ${socket.id} due to ${reason}`);
  });
  socket.on("create", (reason) => {
    //nNetwork::MHiSession::create
    console.log(`create ${socket.id} due to ${reason}`);
  });
  socket.on("lock", (reason) => {
    //nNetwork::MHiSession::lock
    console.log(`lock ${socket.id} due to ${reason}`);
  });
  socket.on("unlock", (reason) => {
    //nNetwork::MHiSession::unlock
    console.log(`unlock ${socket.id} due to ${reason}`);
  });
  socket.on("kick", (reason) => {
    //nNetwork::MHiSession::kick
    console.log(`kick ${socket.id} due to ${reason}`);
  });
  socket.on("entry", (reason) => {
    //nNetwork::MHiSession::entry
    console.log(`entry ${socket.id} due to ${reason}`);
  });
  socket.on("leave", (reason) => {
    //nNetwork::MHiSession::final
    console.log(`leave ${socket.id} due to ${reason}`);
  });
  socket.on("cancel", (reason) => {
    //nNetwork::MHiSession::cancel
    console.log(`cancel ${socket.id} due to ${reason}`);
  });
  socket.on("data", (reason) => {
    //nNetwork::MHiSession::move
    console.log(`data ${socket.id} due to ${reason}`);
  });
  socket.on("terminate", (reason) => {
    //nNetwork::MHiSession::terminate
    console.log(`terminate ${socket.id} due to ${reason}`);
  });
  socket.on("move", (reason) => {
    //nNetwork::MHiSession::move
    console.log(`move ${socket.id} due to ${reason}`);
  });
  socket.on("match", (reason) => {
    //nNetwork::MHiSession::match
    console.log(`match ${socket.id} due to ${reason}`);
  });
  socket.on("host_change_request", (reason) => {
    //nNetwork::MHiSession::move
    console.log(`host_change_request ${socket.id} due to ${reason}`);
  });
  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });
});

httpServer.listen(13000);
console.log(`Multi Started`);
