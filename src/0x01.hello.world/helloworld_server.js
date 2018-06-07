let messages = require('./helloworld_pb')
let services = require('./helloworld_grpc_pb')

let grpc = require('grpc')

function sayHello(call, callback) {
  let reply = new messages.HelloReply();
  reply.setMessage('Hello ' + call.request.getName());
  callback(null, reply);
}

function main() {
  let server = new grpc.Server();
  server.addService(services.GreeterService, {sayHello: sayHello});
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
