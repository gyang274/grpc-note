let messages = require('./helloworld_pb');
let services = require('./helloworld_grpc_pb');

let grpc = require('grpc');

function main() {
  let client = new services.GreeterClient(
    'localhost:50051', grpc.credentials.createInsecure()
  );
  let request = new messages.HelloRequest();
  let user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'World!';
  }
  request.setName(user);
  client.sayHello(
    request, function(err, response) {
      console.log('Greeting:', response.getMessage());
    }
  );
}

main();
