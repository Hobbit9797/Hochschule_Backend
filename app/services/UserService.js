const dbService = require('../../config/dbService');

async function getAll(){
    const data = await dbService.db.collection('user').find().toArray();
    return data;
}

async function getUserForPerson(person){
    const data = await dbService.db.collection('user').findOne({'personId': person._id});
    return data;
}

async function create(user) {
    const res = await dbService.db.collection('user').insertOne(user);
    return res;
}

module.exports = {
    getAll,
    getUserForPerson,
    create,
}