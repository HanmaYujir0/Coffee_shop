const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require('./routes/drinks.route'));




mongoose.connect('mongodb+srv://Emin1:1221@cluster0.4kuhk6r.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'));


const port = 4100;

app.listen(port, () => {
    console.log('Сервер успешно запущен')
});