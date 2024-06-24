//Entry point
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(logger);

app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});