import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const root=path.resolve("out");
const base=process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";
const files=[];
async function walk(dir) {
  for(const entry of await readdir(dir,{withFileTypes:true})) {
    const target=path.join(dir,entry.name);
    if(entry.isDirectory()) await walk(target);
    else if(entry.name.endsWith(".html")) files.push(target);
  }
}
await walk(root);
let checked=0;
for(const file of files) {
  const html=await readFile(file,"utf8");
  const current=base+"/"+path.relative(root,file).replaceAll("\\","/").replace(/index\.html$/,"");
  for(const match of html.matchAll(/\b(href|src)="([^"]*)"/g)) {
    const value=match[2].replaceAll("&amp;","&");
    assert.notEqual(value,"",`Empty ${match[1]} in ${file}`);
    if(/^(https?:|mailto:|data:|tel:|\/\/)/.test(value)) continue;
    const url=new URL(value,"https://example.test"+current);
    if(url.pathname.startsWith("/_next/")) throw new Error(`Missing base path: ${value}`);
    assert(url.pathname.startsWith(base+"/"),`Unexpected path: ${value}`);
    let target=path.resolve(root,"."+decodeURIComponent(url.pathname.slice(base.length)));
    assert(target.startsWith(root+path.sep)||target===root,"Path outside export");
    if((await stat(target)).isDirectory()) target=path.join(target,"index.html");
    await stat(target);
    // Next's generic not-found page has the shared skip link but no content landmark.
    if(url.hash && !file.endsWith("404.html") && !current.includes("_not-found")) {
      const destination=await readFile(target,"utf8");
      assert(destination.includes(`id="${url.hash.slice(1)}"`),`Missing anchor ${value} in ${current}`);
    }
    checked++;
  }
}
console.log(`Checked ${checked} internal links/assets across ${files.length} exported HTML files.`);
