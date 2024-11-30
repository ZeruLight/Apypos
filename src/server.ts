import { app } from "./app";
import { makeDownloadList } from "./services/initResourceDownloadList";
import mongoose from "mongoose";
import {
  IP,
  PORT,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_IP,
  DB_PORT,
} from "./config";
import { createServer } from "http";
import { Server } from "socket.io";

mongoose
  .connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_IP}:${DB_PORT}`, {
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("Connected to MongoDB...");

    const downloadCategories = [
      "openingDL",
      "tutorialDL",
      "trainingDL",
      "v0282/stdDL",
    ];
    const platforms = ["android", "ios"];

    try {
      platforms.forEach((platform) => {
        downloadCategories.forEach((category) => {
          makeDownloadList(category, platform);
        });
      });
    } catch (error) {
      console.error(
        "Failed to create FPK download lists. Please ensure the FPK files are located in './src/public/res/' and the server is properly configured.",
        error
      );
    }
    app.use((req, res, next) => {
      console.log(`Request method: ${req.method}`);
      console.log(`Request URL: ${req.url}`);
      console.log('Request Headers:', req.headers);
      console.log('Request Body:', req.body);
      
      next();  // Pass the request to the next middleware or route handler
  });
    const server = createServer(app);
    const io = new Server(server, {
      allowEIO3: true, // Enables compatibility with Socket.IO v2 clients
      cookie: {
        name: "my-cookie",
        httpOnly: true,
        sameSite: "strict",
        maxAge: 86400,
      },
      initialPacket:false,
      
    });
    // io.on("connect", (socket) => {
    //   console.log(`Client connected: ${socket.id}`);
    //   console.log(`Client connected: ${JSON.stringify(socket.request, null, 2)}`);

    // // Listen for the "heartbeat" event from the client
    // socket.on("heartbeat", (timestamp) => {
    //   console.log(`Received heartbeat at ${timestamp}`);
    //   const currentEpochTime = Date.now();

    //   // Respond every 5 seconds with the current epoch time
    //   const sendHeartbeatResponse = () => {
    //     socket.emit("heartbeat",1732338781802);
    //   };

    //   // Start sending responses every 5 seconds
    //   const interval = setInterval(sendHeartbeatResponse, 10000);

    //   socket.emit("entry", "[]");

    //   socket.emit("entry",     "[]");
    //   socket.emit("data",      "[]");
    //   socket.emit("notice",    "[]");
    //   socket.emit("create_ok", "[]");
    //   socket.emit("create_ng", "[]");
    //   socket.emit("join",      "[]");
    //   socket.emit("join_ok",   "[]");
    //   socket.emit("join_ng",   "[]");
    //   socket.emit("entry",     "[]");
    //   socket.emit("entry_ok",  "[]");
    //   socket.emit("entry_ng",  "[]");
    //   socket.emit("cancel",    "[]");
    //   socket.emit("cancel_ok", "[]");
    //   socket.emit("cancel_ng", "[]");
    //   socket.emit("match",     "[]");
    //   socket.emit("match_ok",  "[]");
    //   socket.emit("terminate", "[]");
    //   // socket.emit("terminate_ok", { status: "received", timestamp });
    //   // socket.emit("lock", { status: "received", timestamp });
    //   // socket.emit("lock_ok", { status: "received", timestamp });
    //   // socket.emit("lock_ng", { status: "received", timestamp });
    //   // socket.emit("unlock", { status: "received", timestamp });
    //   // socket.emit("unlock_ok", { status: "received", timestamp });
    //   // socket.emit("leave", { status: "received", timestamp });
    //   // socket.emit("leave_ok", { status: "received", timestamp });
    //   // socket.emit("host_change", { status: "received", timestamp });

    //   // Clear the interval when the client disconnects
    //   socket.on("disconnect", () => {
    //     console.log(`Client disconnected: ${socket.id}`);
    //     clearInterval(interval);
    //   });
    // });

    // socket.on("entry", (reason) => {
    //   //nNetwork::MHiSession::create
    //   console.log(`create ${socket.id} due to ${reason}`);
    // });
    // socket.on("lock", (reason) => {
    //   //nNetwork::MHiSession::lock
    //   console.log(`lock ${socket.id} due to ${reason}`);
    // });
    // socket.on("unlock", (reason) => {
    //   //nNetwork::MHiSession::unlock
    //   console.log(`unlock ${socket.id} due to ${reason}`);
    // });
    // socket.on("kick", (reason) => {
    //   //nNetwork::MHiSession::kick
    //   console.log(`kick ${socket.id} due to ${reason}`);
    // });
    // socket.on("entry", (reason) => {
    //   //nNetwork::MHiSession::entry
    //   console.log(`entry ${socket.id} due to ${reason}`);
    // });
    // socket.on("leave", (reason) => {
    //   //nNetwork::MHiSession::final
    //   console.log(`leave ${socket.id} due to ${reason}`);
    // });
    // socket.on("cancel", (reason) => {
    //   //nNetwork::MHiSession::cancel
    //   console.log(`cancel ${socket.id} due to ${reason}`);
    // });
    // socket.on("data", (reason) => {
    //   //nNetwork::MHiSession::move
    //   console.log(`data ${socket.id} due to ${reason}`);
    // });
    // socket.on("terminate", (reason) => {
    //   //nNetwork::MHiSession::terminate
    //   console.log(`terminate ${socket.id} due to ${reason}`);
    // });
    // socket.on("move", (reason) => {
    //   //nNetwork::MHiSession::move
    //   console.log(`move ${socket.id} due to ${reason}`);
    // });
    // socket.on("match", (reason) => {
    //   //nNetwork::MHiSession::match
    //   console.log(`match ${socket.id} due to ${reason}`);
    // });
    // socket.on("host_change_request", (reason) => {
    //   //nNetwork::MHiSession::move
    //   console.log(`host_change_request ${socket.id} due to ${reason}`);
    // });
    // socket.on("disconnect", (reason) => {
    //   console.log(`disconnect ${socket.id} due to ${reason}`);
    // });
    // });
    io.use((socket, next,) => {
      console.log(`Incoming connection: ${socket.id}`);
      next(); // Call next to proceed with the connection
    });
    io.on("connection", (socket) => {
      console.log("Client connected:", socket.id);
    
      
      socket.on("heartbeat", (data) => {
        console.log(data);
        const heartbeatInterval = setInterval(() => {
          //socket.emit("data", "["+Date.now()+"]");
          socket.emit("entry", "[1]"); //7
        socket.emit("data", "[2]"); //0
        socket.emit("notice", "[3]"); //0
        socket.emit("create_ok", "[4]"); //2
        socket.emit("create_ng", "[5]"); //3
        socket.emit("join", "[6]");
        socket.emit("join_ok", "[7]");
        socket.emit("join_ng", "[8]");
        socket.emit("entry", "[9]");
        socket.emit("entry_ok", "[10]");
        socket.emit("entry_ng", "[11]");
        socket.emit("cancel", "[12]");
        socket.emit("cancel_ok", "[13]");
        socket.emit("cancel_ng", "[14]");
        socket.emit("match", "[15]"); //13
        socket.emit("match_ok", "[16]"); //13
        socket.emit("terminate", "[17]"); //14
        socket.emit("terminate_ok", "[18]"); //14
        socket.emit("lock", "[19]"); //15
        socket.emit("lock_ok", "[20]"); //16
        socket.emit("lock_ng", "[21]");
        socket.emit("unlock", "[22]");
        socket.emit("unlock_ok", "[23]");
        socket.emit("leave", "[24]");
        socket.emit("leave_ok", "[25]"); //21
        socket.emit("host_change", "[26]"); //22
  
        }, 5000);
       
      });

      // Handle "disconnect" event
      socket.on("disconnect", (reason) => {
        // clearInterval(heartbeatInterval);
        console.log(`Client disconnected: ${socket.id}, Reason: ${reason}`);
      });

      // Handle "error" event (optional, handled by default)
      socket.on("error", (error) => {
        console.error(`Error for client ${socket.id}:`, error.message);
      });
    });
    server.listen(PORT, () => {
      console.log(`Apypos Server started on http://${IP}:${PORT}`);
    });
  })
  .catch((err) =>
    console.error(
      "Coudn't Start Apypos Server: Couldn't connect to MongoDB....",
      err
    )
  );
