const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

exports.encrypt = (buffer,password)=>{
    let cipher = crypto.createCipher(algorithm,password)
    let crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
    return crypted;
}
exports.decrypt = (buffer,password)=>{
    let decipher = crypto.createDecipher(algorithm,password)
    let dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
    return dec;
}
