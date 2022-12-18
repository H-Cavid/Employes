const employees = [
    {
        id: 0,
        name: 'Elnur',
        age: 30
    },

    {
        id: 1,
        name: 'Ferid',
        age: 20
    },

    {
        id: 2,
        name: 'Nezrin',
        age: 21
    }
]

const express = require('express');
const app = express();

app.get('/employee', function (req, res) {
    res.json(employees);
  });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});