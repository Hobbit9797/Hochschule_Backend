const dbService = require('../../config/dbService');

async function getAll(){
    const data = await dbService.db.collection('person').find().toArray();
    return data;
}

async function getOne(_id){
    const data = await dbService.db.collection('person').findOne({'_id': _id});
    return data;
}

async function create(person) {
    const res = await dbService.db.collection('person').insertOne(person);
    return res;
}

module.exports = {
    getAll,
    getOne,
    create,
}