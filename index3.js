const ipfsFile = require('./ipfsFile');
const fs = require('fs');
const crypto = require('crypto');
const AES = require('./aes');


let addPath = "./file2.yaml";
let password = crypto.randomBytes(32).toString("hex");
let buff = AES.encrypt(fs.readFileSync(addPath),password);
//let buff = fs.readFileSync(addPath);
console.log(password);

ipfsFile.add(buff).then((hash)=>{
    console.log(hash);
    console.log("https://ipfs.io/ipfs/"+hash);
    return ipfsFile.get(hash);
}).then((buff)=>{
   // let obj = JSON.parse(buff.toString('utf-8'));
   // console.log(buff.toString('utf-8'));
      console.log(AES.decrypt(buff,password).toString('utf-8'));

}).catch((err)=>{
    console.log(err);
}
)
