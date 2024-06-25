// concurrently.js
import { exec } from "child_process";

const server = exec("node server/server.js", { stdio: "inherit" });
const client = exec("npm run dev --prefix client", { stdio: "inherit" });

server.stdout.pipe(process.stdout);
server.stderr.pipe(process.stderr);

client.stdout.pipe(process.stdout);
client.stderr.pipe(process.stderr);
