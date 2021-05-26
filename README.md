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

`run.ps1` executes the content of the file `index.js`.
```
./run.ps1
```

`run-lt.ps1` executes the `localtunnel` command `lt --subdomain mysubdomain --port 8000` directly:
```
./run-lt.ps1
```

Additionally, after the execution of `localtunnel` crashes, the script will wait some seconds to properly finish the connection to be able to expose again using the same *subdomain*.