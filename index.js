import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import os from 'os'
import cluster from 'cluster'

import cookieParser from 'cookie-parser'
import path from 'path';
import { fileURLToPath } from 'url';
import dbMethods from "./connectDB.js"

import userRoutes from './routes/users.route.js'
import todoRoutes from './routes/todos.route.js'
import authRoutes from './routes/auth.route.js'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const coreNum = os.cpus().length

dotenv.config()

const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/todos", todoRoutes)

if (cluster.isPrimary) {
    for (let i = 0; i < coreNum; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker with pid: ${worker.process.pid} stopped`)

        cluster.fork()
    })
} else {
    // Start the server
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`);
        dbMethods.connectDB()
    });
}

