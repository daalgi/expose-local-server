try {
    const root = require('child_process').execSync('npm root -g').toString().trim()
    const localtunnel = require(root + "/localtunnel")

    console.log("\nLocal tunnel")
    const port = 8000
    const subdomain = "pyfon-server314"
    console.log(`Exposing ${subdomain}, port ${port}`)

    let tunnelUrlYouWant = `https://${subdomain}.loca.lt`

    let tunnel = localtunnel({ port, subdomain }, err => {
        if (err) console.log(err)

        if (tunnel.url !== tunnelUrlYouWant) {

            console.log(`"${subdomain}" not available. Running a random subdomain...`)
        }
            

        console.log(tunnel.url)
        // tunnelUrlYouWant = tunnel.url
    })

    /*
    Restarting method NOT WORKING
    let restartingTunnel = false

    tunnel.on('close', err => {
        console.log("---------> CLOSE")
    })
    tunnel.on('error', err => {
        console.log("---------> ERROR")
        if (restartingTunnel) return

        restartingTunnel = true
        console.log('Error on tunnel. Restarting...')

        tunnel = localtunnel({ port, subdomain }, err => {
            if (err) {
                console.log("Error while creating tunnel: " + err)
                process.exit()
            }
            console.log(tunnel.url)
            if (tunnel.url !== tunnelUrlYouWant) {
                console.log("Error! Subdomain is in use!")
                process.exit()
            }
        })
    })*/

} catch (err) {
    console.error(`Install localtunnel globally first with: npm install -g localtunnel`)
    process.exit(1)
}
