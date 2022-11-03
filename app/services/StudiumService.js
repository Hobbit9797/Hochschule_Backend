const dbService = require('../../config/dbService');

async function getAll(){
    const data = await dbService.db.collection('studium').find().toArray();
    return data;
}

async function getStudiumForPerson(person){
    const data = await dbService.db.collection('studium').findOne({'personId': person._id});
    return data;
}

async function create(studium) {
    const res = await dbService.db.collection('studium').insertOne(studium);
    return res;
}

module.exports = {
    getAll,
    getStudiumForPerson,
    create,
}