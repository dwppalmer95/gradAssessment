const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const restaurantsRouter = require('./routes/restaurants');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/restaurants', restaurantsRouter);

app.use((req, res) => {
  res.status(404).send('This is not the page you\'re looking for...');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
