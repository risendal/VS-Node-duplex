var net = require('net');
var buffy = new Buffer(4);
buf3 = new Buffer([0,0,0,3]);

var client = net.connect(6340, '129.241.140.232', function() {
   console.log('connected to server!');  
   //client.write('4');
   //buffy = 1;
   client.write(buf3);
});
client.on('data', function(data) {
  // console.log(data.toString());
  console.log(data);
  // client.end();
});
client.on('end', function() { 
   console.log('disconnected from server');
});

