# Hello World

## Python

```
$ python -m grpc_tools.protoc --version
libprotoc 3.5.1
```

```
./helloworld.proto
``` 

```
$ python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. helloworld.proto
```

```
./helloworld_server.py

./helloworld_client.py
```

```
$ python helloworld_server.py

$ python helloworld_client.py
```

## Node

```
$ grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` helloworld.proto
```

```
./helloworld_server.js

./helloworld_client.js

./package.json
```

```
npm install

$ node helloworld_server.js

$ node helloworld_client.js
```



## protoc from OS

```
# https://github.com/google/protobuf
# https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip

$ protoc --version
libprotoc 3.5.1

$ which grpc_tools_node_protoc_plugin
# ~/.nvm/versions/node/v8.11.2/bin/grpc_tools_node_protoc_plugin

$ which grpc_python_plugin
# ~/gits/grpc/bins/opt/grpc_python_plugin

$ protoc -I. \
    --python_out=. \
    --grpc_python_out=. \
    --plugin=protoc-gen-grpc_python=/yg/gits/grpc/bins/opt/grpc_python_plugin \
    helloworld.proto
    
$ protoc -I. \
    --js_out=import_style=commonjs,binary:. \
    --grpc_out=. \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    helloworld.proto

$ protoc -I. \
    --python_out=. \
    --grpc_python_out=. \
    --plugin=protoc-gen-grpc_python=`which grpc_python_plugin` \
    --js_out=import_style=commonjs,binary:. \
    --grpc_out=. \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    helloworld.proto
```

- Python Server + Python/Node Client

```
$ python helloworld_server.py

$ node helloworld_client.js

$ python helloworld_client.py
```

- Node Server + Python/Node Client

```
$ node helloworld_server.js

$ node helloworld_client.js

$ python helloworld_client.py
```


