# init

## python

- create a virtual environment

```
conda create -n gp python=3.6
```

- upgrade pip to v9.0.1+

```
python -m pip install --upgrade pip
```

- install grpc

```
python -m pip install grpcio
```

- install grpc tools

```
python -m pip install grpcio-tools
```

## node

- install nvm (node.js version manager)

```
$ curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh

$ bash install_nvm.sh
```

- install node and npm via nvm

```
$ source ~/.bashrc

$ nvm ls-remote

# nvm use system

$ nvm install 8.11.2

$ nvm use 8.11.2

$ nvm use default
```

- node and npm version

```
node --version
v8.11.2
```

```
$ npm --version
5.6.0
```

- install grpc-tools

```
$ npm install -g grpc-tools
```

# gits

- build grpc_python_plugin from source

```
$ git clone https://github.com/grpc/grpc.git
$ git submodule update --init
$ make grpc_python_plugin
$ ls ./bins/opt/grpc_python_plugin
```


