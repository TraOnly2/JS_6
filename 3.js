const fs = require('node:fs').promises;

function readFile(filepath) {
    return fs.readFile(filepath, 'utf-8');
}

function writeFile(filepath, data) {
    return fs.writeFile(filepath, data, 'utf-8');
}

const InputFile = 'input_3.txt';
const OutputFile = 'write_3.txt';

async function File(){
    try{
        const data = await readFile(InputFile);

        console.log(`Read Data: ${data}`);

        const processedData = data.toUpperCase();
        await writeFile(OutputFile, processedData);

    }catch(error){
        console.log(error);

    }
    
}
File();


