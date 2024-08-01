const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send({ "message": "Hello World" })
})

app.post('/webhook', function (req, res) {
    console.dir(req.body,{depth : null});
    res.status(200).send({ "message": "Webhook Success" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});