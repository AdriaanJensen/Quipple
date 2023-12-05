
const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Read CSV File
function readCSV(filePath) {
  const data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        data.push(row);
      })
      .on('end', () => {
        resolve(data);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

// Write to CSV File
function writeCSV(filePath, data) {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: Object.keys(data[0]), // Assuming all rows have the same keys
  });

  return csvWriter.writeRecords(data);
}

// Example data
const reviewData = [
  { Plot: 4, 'Character Depth': 5, World: 3, Grammar: 4 },
  { Plot: 3, 'Character Depth': 4, World: 5, Grammar: 2 },
  // Add more rows as needed
];

// Specify your CSV file path
const csvFilePath = '/VSC All Codes/Quipple/RatingCollectionQuipple.csv';

// Read existing data from CSV
readCSV(csvFilePath)
  .then((existingData) => {
    // Add or modify data as needed
    existingData.push(...reviewData);

    // Write updated data to CSV
    return writeCSV(csvFilePath, existingData);
  })
  .then(() => {
    console.log('Data successfully written to CSV.');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
