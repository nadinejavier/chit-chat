const io = require('./index.js').io
module.export = function(socket){
  console.log("Socket Id" + socket.id)
}