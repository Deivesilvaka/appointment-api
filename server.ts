import Backend from "./src"
import os from 'os'
import cluster from 'cluster'

function primaryProcess() {
    const processesCount: number = os.cpus().length * 2

    for(let index = 0; index < processesCount; index++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
         if(code !== 0 && !worker.exitedAfterDisconnect) {
            console.info(`Worker ${worker.process.pid} is dead! Scheduling another one...`)
            cluster.fork()
         }
    })
}

function workerProcess() {
    Backend.start()
}

// cluster.isPrimary ? primaryProcess() : workerProcess()

workerProcess()