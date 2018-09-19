const ipfsFile = require('./ipfsFile');
const fs = require('fs');


let addPath = "./file2.yaml";
let buff = fs.readFileSync(addPath);


ipfsFile.add(buff).then((hash)=>{
    console.log(hash);
    console.log("https://ipfs.io/ipfs/"+hash);
    return ipfsFile.get(hash);
}).then((buff)=>{
   // let obj = JSON.parse(buff.toString('utf-8'));
    console.log(buff.toString('utf-8'));
}).catch((err)=>{
    console.log(err);
}
)
