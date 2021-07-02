const elasticClient = require("../config/elastic");

exports.get = (req, res, next) => {
    const searchText = req.query.text

    elasticClient.search({
            index: 'person',
            body: {
                query: {
                    wildcard: { "name": `*${searchText.trim()}*` }
                }
            }
        })
        .then(response => {
            return res.json(response)
        })

};

exports.getById = (req, res, next) => {
    const id = req.params.id;

    elasticClient.search({
            index: 'products',
            body: {
                query: {
                    match: { "_id": id }
                }
            }
        })
        .then(response => {
            return res.json(response)
        })
};

exports.post = (req, res, next) => {
    elasticClient.index({
            index: 'person',
            body: {
                "name": req.body.name,
                "email": req.body.mail,
                "age": req.body.age,
            }
        })
        .then(response => {
            return res.json({ "message": "Indexing successful" })
        })
        .catch(err => {
            return res.status(500).json({ "message": "Error" })
        })

};

exports.put = (req, res, next) => {
    const id = req.params.id;

    elasticClient.update({
            index: 'person',
            id: id,
            body: {
                doc: req.body
            }
        })
        .then(response => {
            return res.json(response)
        })

};

exports.delete = (req, res, next) => {
    const id = req.params.id;

    elasticClient.delete({
            index: 'person',
            id: id
        })
        .then(response => {
            return res.json(response)
        })
};