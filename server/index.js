const express = require('express');
const socketio = require('socket.io');
const axios = require('axios');
const http = require('http');
const PORT = process.env.PORT || 5000;
const router = require('./router')
const app = express();
const server = http.createServer(app);
const io = socketio(server);
var cors = require('cors');

app.use(cors());
app.use(router);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('join', ({name})=>{
      console.log(name);
      //socket.broadcast.emit('playerData',{otherPlayer:name});
    });
    // socket.on('disconnect',()=>{
    //     console.log('user disconnected')
    // })
  });

// io.of('/puzzle')
//   .on('connection', (socket) => {
//     socket.emit('message',{serverMessage:"you just a little more"});

//     socket.on('puzzle', ({data})=>{
//       lastSavedPuzzle = data;
//       socket.broadcast.emit('myData',{data:data});
//     });

//     socket.on('selectedSquare', ({squareId})=>{
//       socket.broadcast.emit('mySelectedSquare',{squareId:squareId});
//     });

//     socket.on('nameRequest', ({nameRequest})=>{
//       socket.broadcast.emit('myNameRequest',"namePls");
//     });
//     socket.on('resetInitial', ({data})=>{
//       if(data){
//         PuzzleSchema.updateOne({'_id':myObjectID},{ $set: {initialPuzzle: data,currentPuzzle:data} },
//         function(err){
//           if (err) throw err;
//           console.log("1 document updated");
//         })
//       }
//     });
//     socket.on('disconnect',()=>{
//       console.log('user disconnected')
//       //modify database entry to most recently saved puzzle
//       if(lastSavedPuzzle){
//         PuzzleSchema.updateOne({'_id':myObjectID},{ $set: {currentPuzzle: lastSavedPuzzle} },
//         function(err){
//           if (err) throw err;
//           console.log("1 document updated");
//         })
//       }
//       });
//   });

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));