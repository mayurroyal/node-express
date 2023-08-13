import express from 'express'
import cluster from 'cluster'
import os from 'os'
import dotnav from 'dotenv'
import mainRouter from './src/routes/main.js'

dotnav.config()

if (cluster.isPrimary) {
    const cpuLength = os.cpus().length

    for (let index = 0; index < cpuLength; index++) {
        cluster.fork()
    }

    cluster.on("exit", () => {
        cluster.fork()
    })
} else {

    const app = express()

    app.use(mainRouter)

    const port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log(`app listening on port ${port} and processId is ${process.pid}`)
    })
}

