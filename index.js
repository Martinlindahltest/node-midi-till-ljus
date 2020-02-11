
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.get('/', (req, res) => {
    res.send("hello hello");
})

function triggPusher(input) {
    pusher.trigger('my-channel', 'my-event', {
        "message": input
    });
    return("kör pusher-trigg")

}

app.post('/', (req, res) => {
    console.log(req.body.text);
    res.send("this is post request");
    triggPusher("hello World")

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '896495',
    key: '959108219678a5d6f07d',
    secret: '6ee4172f119409e30db9',
    cluster: 'eu',
    encrypted: true
});

