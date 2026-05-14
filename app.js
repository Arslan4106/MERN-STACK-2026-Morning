const fs = require('fs');
const express = require('express');
const app = express();
// app.get('/', (req, res) => {
//   res.status(200).send('Hello! You are on the Server Side');
// });
// app.post('/', (req, res) => {
//   res.status(200).send('You can post on the endpoint....');
// });

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
// );
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);
// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// });
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`You application is running on the port ${port}...`);
});

// npm init
// npm i express@4

// Next Page: Server => Current Page = 6,       currentPage + 1 => id = 7
// Next Page: Server = Current Page = 6,     send(7)

// Off-Page SEO
// Mozbar
// DA: Domain Authority: 1 to 100, Filter: DA: 90+
// PA: Page Authority: 1 to 100,  Filter: PA: 70+
// Spam Score: SS: 1% to 100%,  Filter: 1% to 10%

// => Profile Creation Backlinks
// => Image Submission Backlinks
// => PDF Submission Backlinks
// => Article Submission Backlinks
// => Forum Posting Backlinks
// => Blog Commenting Backlinks
// => Infographic Submission Backlinks
// => Guest Posting Backlinks
// => PBN Backlinks
// => Classifieds Ads Submission Backlinks
// => Edu Submission Backlinks
// => Social Bookmarking Backlinks
// => Web 2.o Backlinks
// => Web Directories Submission Backlinks
// => Search Engine Submission Backlinks
