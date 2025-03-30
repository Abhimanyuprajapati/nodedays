// 1. readable stream
// 2. writable stream
// 3. duplex stream (both readable and writable) (TCP socket)
// 4. transform stream (a type of duplex stream that can modify the data 
//                          as it is read or written)  (crypto, zlib)


const fs = require('fs');
const zlib = require('zlib'); // compression module
const crypto = require('crypto'); // encryption module
const {Transform} = require('stream'); // transform stream module

class EncryptStream extends Transform {
    constructor(key, vector) {
        super();
       this.key = key;
       this.vector = vector;
    }

    _transform(chunk, encoding, callback) {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.vector);
        const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]); // encrypt the chunk
        this.push(encrypted); // push the encrypted chunk to the readable side of the stream
        callback();
    }
}

const key = crypto.randomBytes(32); // 256 bit key
const vector = crypto.randomBytes(16); // 128 bit vector

const readableStream = fs.createReadStream('input.txt'); // readable stream

// new gzip object to compress the stream of data
const gzipStream = zlib.createGzip(); // gzip object

const encryptStream = new EncryptStream(key, vector); // create an instance of the EncryptStream class

const writableStream = fs.createWriteStream('output.txt.gz.enc'); // writable stream

// read -> compress -> encrypt -> write

readableStream.pipe(gzipStream).pipe(encryptStream).pipe(writableStream); // pipe the streams together