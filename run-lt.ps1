param ($port, $subdomain)
while($true)
{
    lt --subdomain $subdomain --port $port
    Start-Sleep -s 2
}