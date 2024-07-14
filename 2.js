const fs = require('node:fs').promises;

function readFile(filepath) {
    return fs.readFile(filepath, 'utf-8');
}

function writeFile(filepath, data) {
    return fs.writeFile(filepath, data, 'utf-8');
}

const InputFile = 'input.txt';
const OutputFile = 'write.txt';

readFile(InputFile)
    .then(data => {
        console.log(`Read data: ${data}`);
        const processedData = data.toUpperCase();
        return writeFile(OutputFile, processedData);
    })
    .then(() => {
        console.log(`Data written to ${OutputFile}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });







