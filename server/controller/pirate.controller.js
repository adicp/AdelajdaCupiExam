const Pirate = require('../models/pirate.models');

module.exports = {
    getAllPirates: ((req, res) => {
        Pirate.find().sort({pirateName: 1}).collation({locale: "en", caseLevel:true})
            .then((allPirates) => {
                console.log(allPirates)
                res.json(allPirates)
            })
            .catch((err) => {
                console.log(err);
            })
    }),
    addPirate: ((req, res) => {
        Pirate.create(req.body)
            .then((newPirate) => {
                console.log(newPirate);
                res.json(newPirate);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    }),

    deletePirate: ((req, res) => {
        Pirate.deleteOne({_id: req.params.id})
            .then((deletedPirate) => {
                res.json(deletedPirate)
            })
            .catch((err) => {
                response.status(400).json(err);
            })
    }),

    getOnePirate: ((req, res) => {
        Pirate.findOne({_id: req.params.id})
            .then((onePirate) => {
                res.json(onePirate)
            })
            .catch((err) => {
                console.log(err)
            })
    }),

    updateOnePirate: ((request, response) => {
        Pirate.findOneAndUpdate({_id: request.params.id},
            request.body,
            {new: true, runValidators: true}

            )
            .then((updatedPirate) => {
                console.log(updatedPirate);
                response.json(updatedPirate)
            })
            .catch((err) => {
                response.status(400).json(err);
            })
    })
}