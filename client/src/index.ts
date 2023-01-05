import WebSocket from "ws";

const port = 1234;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.on('open', () => {
    ws.send(`Hi from client.`);
});

ws.on('message', (data) => {
    console.log(`Received message ${data}`);
});