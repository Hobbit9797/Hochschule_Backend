const personService = require('../services/PersonService');

async function get(req, res, next) {
    try {
        let persons = await personService.getAll()
        res.json(persons);
    } catch (err) {
        console.error(`Error while getting persons`, err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        const personContainer = req.body;
        const person = personContainer.person;
        const student = personContainer.student;
        const user = personContainer.user;


        res.json(await personService.create(req.body));
    } catch (err) {
        console.error(`Error while creating person`, err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        //res.json(await personService.update(req.params.id, req.body));
        res.status(404).send('Sorry, we cannot find that!');
    } catch (err) {
        console.error(`Error while updating person`, err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        //res.json(await personService.remove(req.params.id));
        res.status(404).send('Sorry, we cannot find that!');
    } catch (err) {
        console.error(`Error while deleting person`, err.message);
        next(err);
    }
}

module.exports = {
    get,
    create,
    update,
    remove
};
