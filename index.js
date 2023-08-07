import express from 'express'
import cluster from 'cluster'
import os from 'os'
import dotnav from 'dotenv'
import mainRouter from './src/routes/router.js'

dotnav.config()

const app = express()

app.use(mainRouter)

const port = process.env.PORT || 3000

if (cluster.isPrimary) {
    const cpuLength = os.cpus().length

    for (let index = 0; index < cpuLength; index++) {
        cluster.fork()
    }

    cluster.on("exit", () => {
        cluster.fork()
    })
} else {
    app.listen(port, () => {
        console.log(`app listening on port ${port} and processId is ${process.pid}`)
    })
}

