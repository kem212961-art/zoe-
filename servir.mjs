import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const types = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.mp3':'audio/mpeg' };
http.createServer((req,res)=>{
  let target;
  try { target=path.resolve(root, '.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname)); }
  catch { res.writeHead(400);res.end();return; }
  if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  if(target===root)target=path.join(root,'index.html');
  fs.readFile(target,(error,data)=>{if(error){res.writeHead(404);res.end('No encontrado');return;}res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});res.end(data);});
}).listen(4173,'127.0.0.1',()=>console.log('Invitación: http://localhost:4173'));
