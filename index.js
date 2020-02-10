var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '896495',
    key: '959108219678a5d6f07d',
    secret: '6ee4172f119409e30db9',
    cluster: 'eu',
    encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
    "message": "hello Daniel"
});