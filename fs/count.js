const fs = require("node:fs");

function readAndModify() {
    fs.readFile('./count.json', 'utf8', (err, result) => {
        if (result) {
            const data = JSON.parse(result);
            data.count += 1;
            fs.writeFile('./count.json', JSON.stringify(data), (err) => {
                if (err) console.log('Unable to write in file');
                else console.log('File updated');
            })
        } else {
            console.log(err);
        }
    })
}

readAndModify();