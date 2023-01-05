import { WebSocketServer } from "ws";

const port: number = 1234;
const wss = new WebSocketServer({port});

wss.on('connection', (ws) => {

    ws.on('message', (data) => {
        console.log(`Received message from client: ${data}`);
    })

    ws.send(`Hello from server.`);
});

console.log(`Web Socket listening at ${port}...`);