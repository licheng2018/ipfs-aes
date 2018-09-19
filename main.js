const ipfsFile = require('./ipfsFile');
const fs = require('fs');
const crypto = require('crypto');
const AES = require('./aes');

//操作文件
let addPath = "./file2.yaml";
//生成64位随机数作为密码
//let password = crypto.randomBytes(32).toString("hex");
//let buff = AES.encrypt(fs.readFileSync(addPath),password);
buff=fs.readFileSync(addPath);
//console.log(password);
//操作内容
ipfsFile.add(buff).then((hash)=>{
    console.log(hash);
    console.log("http://localhost:8080/ipfs/"+hash);
    return ipfsFile.get(hash);
}).catch((err)=>{
    console.log(err);
})
