const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');

const { USER_ERROR, asyncMiddleware, errorHandler } = require('./util');

const PORT = process.env.PORT || '3000';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog-posts');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./src/public', {
  index: false
}));

app.get('/', asyncMiddleware(async (req, res, next) => {
  await res.sendFile(path.resolve(__dirname, '../public/index.html'));
}));

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

module.exports = app;
