module.exports = function(app, db) {
    const collection = app.post('/notes', (req, res) => {
        const note = { text: req.body.text, title: req.body.title };
        db.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
};