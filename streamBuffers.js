import fs from 'fs';

const files = ["demo.txt", 'copy.txt']

const writeStream = fs.createWriteStream('write.txt', { encoding: 'utf8' });

files.forEach(file => {
    const readStream = fs.createReadStream(file, { encoding: 'utf8' })

    readStream.on('data', (chunk) => {
        console.log('New chunk received:');

        writeStream.write("\n" + chunk.toUpperCase())
    }
    );
})