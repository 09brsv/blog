const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

const port = 3030;

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port, () => {
  console.log(`Server listenning in http://localhost:${port}`);
});
