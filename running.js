const express = require('express');
const app = new express();
const port = 3000;

app.get('/', function(request, response){
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})