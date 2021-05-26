const root = require('child_process').execSync('npm root -g').toString().trim()
let localtunnel

// Import global modules
try {
    localtunnel = require(root + "/localtunnel")
} catch (err) {
    console.error(`Install localtunnel globally first with: npm install -g localtunnel`)
    process.exit(1)
}

try {
    require(root + "/dotenv").config()
} catch (err) {
    console.error(`Install dotenv globally first with: npm install -g dotenv`)
    process.exit(1)
}

// Run localtunnel
console.log("\nRunning local tunnel...")
const port = process.env.LOCAL_HOST_PORT
const subdomain = process.env.LOCAL_HOST_SUBDOMAIN
console.log(`Port: ${port}\nSubdomain: ${subdomain}\nExposing...`)

let tunnelUrlYouWant = `https://${subdomain}.loca.lt`

let tunnel = localtunnel({ port, subdomain }, err => {
    if (err) console.log(err)

    if (tunnel.url !== tunnelUrlYouWant) {

        console.log(`"${subdomain}" not available. Running a random subdomain...`)
    }

    console.log(tunnel.url)
})

/*
// Restarting method NOT WORKING
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