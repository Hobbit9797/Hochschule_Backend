const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://admin:yah7aeNg1@cluster0.ikg7evn.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'hochschule'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

const dbService = {
    client: undefined,
    db: undefined,
    connect: callback => {
        client.connect().then(() => {
            dbService.client = client;
            dbService.db = client.db(dbName);
        });
    }
};

module.exports = dbService;