let db;
export async function openStore(){
  db=await new Promise((resolve,reject)=>{const r=indexedDB.open('supros-sheet',1);r.onupgradeneeded=()=>r.result.createObjectStore('state');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});
}
export function read(){return new Promise((resolve,reject)=>{const r=db.transaction('state').objectStore('state').get('current');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
export function write(value,key='current'){return new Promise((resolve,reject)=>{const tx=db.transaction('state','readwrite');tx.objectStore('state').put(value,key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Gravação interrompida'));});}
