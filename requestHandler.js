const querystring = require('querystring');
const fs = require('fs');

function start(response, postData) {
  console.log('Request handler \'start\' was called.');
  var body = '<html>' +
       '<head>' +
       '<meta http-equiv="Content-Type" content="text/html; ' +
      'charset=UTF-8" />' +
      '</head>' +
      '<body>' +
     '<form action="/upload" enctype="multipart/form-data">' +
     '<input type="file" name="upload>' +
     '<input type="submit" value="Upload File" />' +
     '</form>' +
     '</body>' +
     '</html>';
 
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(body);
  response.end();
}
 
function upload(response, postData) {
  console.log('Request handler \'upload\' was called.');
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('you sent:' + querystring.parse(postData).text);
  response.end();
}
 
function show(response) {
  console.log('request handler show was called');
  response.writeHead(200, { 'Content-Type': 'image/png' });
  fs.createReadStream('./tmp/test.png').pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
