# expose-local-server

Powershell script that runs iteratively `localtunnel`, providing a restarting functionality everytime there's an error in the local server being exposed.

## Requirements
It's required to have `localtunnel` and `dotenv` installed globally:
```
npm install -g localtunnel
npm install -g dotenv
```

The environment variables `LOCAL_HOST_PORT` and `LOCAL_HOST_SUBDOMAIN` have to be defined in a `.env`.

## How to use
To run in Windows 10 use the Powershell command line.

`run.ps1` executes the content of the file `index.js`. The following example uses the default `port` of 8000 and a randomly generated subdomain given by `localtunnel`:
```
./run.ps1
```

You can pass the `port` as an argument. In this example the subdomain is also randomly generated:
```
./run.ps1 8686
```

You can pass the `subdomain` as well:
```
./run.ps1 8888 mysubdomain
```

`run-lt.ps1` executes the `localtunnel` command `lt --subdomain mysubdomain --port 8000` directly. At least the `port` must be passed. If only the `port` is passed, the `subdomain` will be randomly generated.
```
./run-lt.ps1 8000
```
```
./run-lt.ps1 8000 mysubdomain
```

Additionally, after the execution of `localtunnel` crashes, the script will wait some seconds to properly finish the connection to be able to expose again using the same *subdomain*.