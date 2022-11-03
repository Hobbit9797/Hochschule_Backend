const dbService = require('../../config/dbService');

async function getAll(){
    const data = await dbService.db.collection('modul').find().toArray();
    return data;
}

async function getOne(_id){
    const data = await dbService.db.collection('modul').findOne({'_id': _id});
    return data;
}

async function getAllForStudium(studiengang){
    const data = await dbService.db.collection('modul').find({'studiengangId': studiengang._id});
    return data;
}

async function create(modul) {
    const res = await dbService.db.collection('modul').insertOne(modul);
    return res;
}

module.exports = {
    getAll,
    getOne,
    create,
}