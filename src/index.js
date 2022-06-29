const http = require('http');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const showUsers = require('./module/users');


const users = showUsers();
const server = http.createServer((request, response) => {

  const url = new URL(request.url, 'http://127.0.0.1'); 
  // const users = fs.readFileSync("./src/data/users.json")

  let name = url.searchParams.get("name");
  let usersreq = url.searchParams.get("users");
  
    if (usersreq === '') {
      response.statusCode = 200;
      response.statusMessage = 'OK';
      response.write(users);

    } else if (name) {
      response.statusCode = 200;
      response.statusMessage = `Hello, ${name}`;
      response.write(`Hello, ${name}`);
    }
    else if (name === '') {
      response.statusCode = 400;
      response.statusMessage = 'Enter a name';
      response.write('Enter a name');
    } else if (url.search === '') {
        response.statusCode = 200;
        response.statusMessage = 'Hello, World';
        response.write('Hello, World');
      } else {
        response.statusCode = 500;
        response.statusMessage = '';
      }
  //response.setHeader('Content-Type', 'text/plain');

    response.end();

})

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Сервер запущен — http://127.0.0.1:${port}`);
});