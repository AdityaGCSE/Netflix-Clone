// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

///////////////////////////////////////////////////////////////////////////////////

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/rwdb');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

var kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

var Kitten = mongoose.model('Kitten', kittySchema);

var adityakitty = new Kitten({ name: 'kittyajay' });

console.log(adityakitty.name);

adityakitty.save();

// adityakitty.save(function(err, adityakitty){
    // if(err) return console.error(err);
    // adityakitty.speak();
// });

// Kitten.find({name:"kittyaditya"},function(err,kittens){
//     if(err) return console.error(err);
//     console.log(kittens);
// })
