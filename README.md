# expose-local-server

Powershell script that runs iteratively `localtunnel`, providing a restarting functionality everytime there's an error in the local server being exposed.

To run in Windows 10 Powershell command line:
```
./run.ps1
```

It's required to have `localtunnel` installed globally:
```
npm install -g localtunnel
```

You can modify the *port* and the *subdomain* parameters within the file `index.js`.