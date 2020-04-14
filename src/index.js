const express = require('express')
const app = express();
const fileRoutes = require('./routes/fileOperations.routes');
app.use(function (req, res, next) {
	console.log('Start of request in logger API');
	next();
});
app.use('/log', fileRoutes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});