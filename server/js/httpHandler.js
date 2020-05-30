const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// let messageQueue = null;
// module.exports.initialize = (queue) => {
//   messageQueue = queue;
// };
let choice;

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);

    // if (messageQueue.message.length > 0) {
    //   let direction = messagesQueue.dequeue();
    //   res.write(direction);
    // }

    if(req.url === '/random' && req.method === "GET"){
      // let random = Math.floor(Math.random() * 4);
      // let arr = ['left', 'down', 'right', 'up'];
        choice = messageQueue.dequeue()

    };

    if(req.url === '/file' && req.method === "POST"){
      // let random = Math.floor(Math.random() * 4);
      // let arr = ['left', 'down', 'right', 'up'];
        choice = 'FILL_ME_IN';

    };



  res.end(choice);
  next(); // invoke next() at the end of a request to help with testing!
};
