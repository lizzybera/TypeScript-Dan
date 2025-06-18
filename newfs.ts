import fs from 'fs';
import path from 'path'

// Async read
fs.readFile('./data.txt', 'utf8', (err : any, data : any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File contents:', data);
});

// Sync write
try {
  fs.writeFileSync('./data.txt', 'Hello, Node!, hellooooo');
  console.log('File written');
} catch (err) {
  console.error(err);
}


import http from 'http';

const port : number = 2000

const server = http.createServer((req: http.IncomingMessage, res : http.ServerResponse<http.IncomingMessage>) => {
  if (req.url === '/time') {
    const fullPath = path.join(__dirname, 'public', 'data.txt');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Current time: ${new Date().toISOString()}
     ${fullPath}`);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }});

server.listen(port, () => console.log(`Listening on port ${port}`));


import os from "os"

console.log('CPU cores:', os.platform());



const fullPath = path.join(__dirname, 'public', 'data.txt');
console.log("fullPath", fullPath); 