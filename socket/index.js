import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("changeFlag", (flagType) => {
    io.emit("getFlag", flagType);
  });

  socket.on("disconnect", () => {
    console.log("someone has left");
  });
});

io.listen(4000);
