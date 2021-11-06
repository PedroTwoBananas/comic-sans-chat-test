const express = require("express");

const app = express();
const server = require("http").Server(app);
const path = require('path');
const port = process.env.PORT || 8080;
const io = require("socket.io")(server);

const room = {
  users: [],
  messages: [],
};

io.on("connection", (socket) => {
  console.log("connection", socket.id);
  socket.on("user", ({ id, fullName, userImage }) => {
    const socketId = socket.id;

    room.users.push({ socketId, fullName, userImage, id });
    room.users.forEach((user) => {
      socket.emit("user_add", user);
      if (user.socketId === socketId) {
        socket.broadcast.emit("user_add", user);
      }
    });
  });

  socket.on(
    "message",
    ({
      textMessage,
      idMessage,
      myUserId,
      myUserName,
      myUserImage,
      imageMessage,
    }) => {
      const newMessage = {
        textMessage,
        idMessage,
        myUserId,
        myUserName,
        myUserImage,
        imageMessage,
      };

      room.messages.push(newMessage);
      socket.emit("message_add", newMessage);
      socket.broadcast.emit("message_add", newMessage);

      
    }
  );

  socket.on('message_delete', (idMessage) => {
    socket.emit('deleted_message', idMessage);
    socket.broadcast.emit('deleted_message', idMessage);
    room.messages = room.messages.filter(msg => msg.idMessage != idMessage);
    console.log(room.messages);
  });

  socket.on("disconnect", () => {
    const socketId = socket.id;
    console.log("я ушёл", socketId);

    room.users.forEach((user) => {
      if (user.socketId === socketId) {
        socket.broadcast.emit("user_delete", user.id);
        room.users = room.users.filter((user) => user.socketId !== socketId);
      }
    });
  });
  room.messages.forEach((msg) => {
    socket.emit("message_add", msg);
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.listen(port);

// server.listen(9999, (err) => {
//   if (err) {
//     throw Error(err);
//   }
//   console.log("сервер запущен");
// });
