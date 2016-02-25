var net = require('net');

var size = '4';
var data = '3';
var buffer1 = new Buffer([0,0,0,1])
var buffer2 = new Buffer('5')

var server = net.createServer(function(connection) { 
   console.log('client connected');
   connection.on('end', function() {
      console.log('client disconnected');
   });
   connection.on('data', function(data){
      var response = data.toString().trim();
      // console.log(response + '\r\n');
      console.log(data);
     setInterval(function(){
//        console.log('jaja');
        connection.write(buffer1);
        connection.write(buffer2);
     }, 100);
 
//      connection.write(buffer_size);
//      connection.write(data);
   });
   
  
// connection.write('Hello World!\n');
// connection.pipe(connection);
});
server.listen(6340, function() { 
  console.log('server is listening');
});
// server.on('connection', function(){
// });
