const fs = require('fs');
const csv = require('csv-parser');;

fs.createReadStream('src/data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

// This file is a placeholder for future CSV parsing logic.
