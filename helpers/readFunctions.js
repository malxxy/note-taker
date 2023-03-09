const fs = require('fs');
const util = require('util');

// Promise
const read = util.promisify(fs.readFile);

// Capture content and write to JSON
const write = (path, note) => {// final = file destination and note = content to be written
    console.log("debug",path,note)
  fs.writeFile(path, note, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.info(`Data successfully written to ${path}`)
        console.log("trial",path,note)
    }
  });
};
//  read data and add content to file
const readAndAppend = (note, file) => {
    console.log("read and Append line 19")
fs.readFile(file, 'utf8', (err, data) => {

    if (err) { 
        console.error(err);
    } else {
        const parsed = JSON.parse(data);
        // const notes = JSON.parse(parsed);
        parsed.push(note);
        write(file, JSON.stringify(parsed));
        // console.log(27,parsed,JSON.stringify(parsed));
    }
});
};
module.exports = { read, write, readAndAppend };