import { createServer, IncomingMessage, ServerResponse } from "http";

const PORT = process.env.PING_LISTEN_PORT || 3000;

const sendJsonResponse = (res: ServerResponse, statusCode: number, data: object) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
};

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET" && req.url === "/ping") {
        sendJsonResponse(res, 200, { message: "Headers received", headers: req.headers });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end();
    }
};

const server = createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

