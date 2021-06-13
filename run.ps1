param ($port, $subdomain)
while($true)
{
    node ./index.js $port $subdomain
    Start-Sleep -s 2
}