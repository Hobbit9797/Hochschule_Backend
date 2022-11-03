const personService = require('../services/PersonService');
const userService = require('../services/UserService');
const studiumService = require('../services/StudiumService');
const dozentService = require('../services/DozentService');

async function get(req, res, next) {
    try {
        let persons = await personService.getAll();
        res.json(persons);
    } catch (err) {
        console.error(`Error while getting persons`, err.message);
        next(err);
    }
}

async function getStudium(req, res, next) {
    try {
        let studien = await studiumService.getAll();
        console.log(studien);
        let studienContainer = [];

        for(_studium in studien){
            studienContainer.push({
                studium: studien[_studium],
                person: await personService.getOne(studien[_studium].personId)
            });
        }

        console.log(studienContainer);
        res.json(studienContainer);
    } catch (err) {
        console.error(`Error while getting studien`, err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        const personContainer = req.body;
        let person = personContainer.person;
        let studium = personContainer.studium;
        let user = personContainer.user;

        let createdPerson = await personService.create(person);
        let createdStudium = undefined;
        let createdUser = undefined;
        if(studium) {
            studium.personId = createdPerson.insertedId;
            createdStudium = await studiumService.create(studium);
        }
        if(user) {
            user.personId = createdPerson.insertedId;
            user.passwort = 'abcdefg'
            createdUser = await userService.create(user);
        }

        res.json({
            person: createdPerson,
            studium: createdStudium,
            user: createdUser
            }
        );
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
    getStudium,
    create,
    update,
    remove
};
