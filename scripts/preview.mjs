import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("../out/",import.meta.url)));
const mime = {".html":"text/html",".css":"text/css",".js":"text/javascript",".json":"application/json",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".woff2":"font/woff2",".txt":"text/plain",".xml":"application/xml"};
http.createServer(async(req,res)=>{
  try {
    const pathname = decodeURIComponent(new URL(req.url,"http://localhost").pathname);
    if (pathname === "/") {res.writeHead(302,{Location:"/portfolio/"});res.end();return;}
    if (!pathname.startsWith("/portfolio/")) throw new Error("Not found");
    let file = path.resolve(root, "."+pathname.slice("/portfolio".length));
    if (!file.startsWith(root+path.sep) && file!==root) throw new Error("Not found");
    if ((await stat(file)).isDirectory()) file=path.join(file,"index.html");
    const content=await readFile(file);
    res.writeHead(200,{"Content-Type":mime[path.extname(file)]||"application/octet-stream"});
    res.end(content);
  } catch {res.writeHead(404);res.end("Not found");}
}).listen(3017,"127.0.0.1",()=>console.log("Static preview: http://127.0.0.1:3017/portfolio/"));
