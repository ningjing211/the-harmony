const fs = require('fs');
const path = require('path');

// Folder path containing the images
const folderPath = './photo'; // Change this to the actual folder path

// Function to rename files sequentially
fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan folder: ' + err);
  }

  let i = 1;
  files.forEach((file) => {
    const ext = path.extname(file); // Get the file extension
    const newFileName = `image-${i}${ext}`;
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, newFileName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log(`Renamed: ${file} -> ${newFileName}`);
      }
    });

    i++;
  });
});
