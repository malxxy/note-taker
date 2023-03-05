const fs = require('fs');
const util = require('util');

// Promise
const read = util.promisify(fs.readFile);

// Capture content and write to JSON
const write = (final, note) => // final = file destination and note = content to be written
  fs.writeFile(final, JSON.stringify(note, null, 4), (err) => {
    if (err) {
        console.error(err)
    } else {
        console.info(`Data successfully written to ${final}`)
    }
  });

//  read data and add content to file
const readAndAppend = (note, file) => {
fs.readFile(file, 'utf8', (err, data) => {
    if (err) { 
        console.error(err);
    } else {
        const parsed = JSON.parse(data);
        parsed.push(note);
        write(file, parsed);
    }
});
};

module.exports = { read, write, readAndAppend };