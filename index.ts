import express, { Application, Request, Response } from 'express'
import crypto from 'crypto'

const port : number = 2304

const app: Application = express()

app.get('/', (req: Request , res : Response) => {
    res.send(`Welcome to Express ${crypto.randomUUID()}`)
})


app.listen(port, () => {
    console.log(`server is listening ${port}`);
})

// to remove node_modules
// git rm -r --cached node_modules