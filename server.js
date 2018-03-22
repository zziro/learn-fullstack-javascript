//import config, {nodeEnv, logStars} from './config.js';

//console.log(config, nodeEnv);

//logStars('Function')

//import https from 'https';

/*https.get('https://www.lynda.com', res =>{
  console.log('Response status code', res.statusCode)

  res.on('data', chunk =>{
    console.log(chunk.toString());
  });
})*/




/*import http from 'http';

/*const server = http.createServer((req, res) => {
  res.write('Hello HTTP');
  setTimeout(() => {
    res.write('I can stream!');
    res.end();
  }, 3000);
});

server.listen(8080);*/


import config from './config';
//import fs from 'fs';
import express from 'express';
import apiRouter from './api';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>'
  });
});

/*server.get('/about.html', (req, res) => {
  fs.readFile('./about.html', (err, data) => {
    res.send(data.toString());
  });
});*/
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
