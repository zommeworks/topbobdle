const testFolder = '../../posts/2019-08-06';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});