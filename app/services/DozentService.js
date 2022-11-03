const dbService = require('../../config/dbService');

async function getAll(){
    const data = await dbService.db.collection('dozent').find().toArray();
    return data;
}

async function getDozentForPerson(person){
    const data = await dbService.db.collection('dozent').findOne({'personId': person._id});
    return data;
}

async function create(dozent) {
    const res = await dbService.db.collection('dozent').insertOne(dozent);
    return res;
}

module.exports = {
    getAll,
    getDozentForPerson,
    create,
}