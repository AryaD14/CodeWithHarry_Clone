const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;


app.use('/css', express.static('css')) // For serving static files
app.use(express.urlencoded())

app.set('html', path.join(__dirname, 'html')) // Set the views directory

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/home.html'));
});

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/home.html'));
});

app.get('/course', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/course.html'));
});

app.get('/blog', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/blog.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/contact.html'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);