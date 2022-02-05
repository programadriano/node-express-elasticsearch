const elasticClient = require("../config/elastic");

exports.get = (req, res, next) => {
    const searchText = req.query.text

    elasticClient.search({
            body: {
                query: {
                    wildcard: { "name": `*${searchText.trim()}*` }
                }
            }
        })
        .then(response => {
            return res.json(response)
        }).catch(err => {
            return res.status(500).json({ "message": err })
        })

};

exports.getById = (req, res, next) => {
    const id = req.params.id;

    elasticClient.search({
            body: {
                query: {
                    match: { "_id": id }
                }
            }
        })
        .then(response => {
            return res.json(response)
        }).catch(err => {
            return res.status(500).json({ "message": err })
        })
};

exports.post = (req, res, next) => {
    elasticClient.index({
            index: 'person',
            body: {
                "name": req.body.name,
                "email": req.body.email,
                "age": req.body.age,
            }
        })
        .then(() => {
            return res.json({ "message": "Pessoa criada com sucesso!" })
        }).catch(err => {
            return res.status(500).json({ "message": err })
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
        }).catch(err => {
            return res.status(500).json({ "message": err })
        })

};

exports.delete = (req, res, next) => {
    const id = req.params.id;

    elasticClient.delete({
            index: 'person',
            id: id
        })
        .then(response => {
            return res.json(response);
        }).catch(err => {
            return res.status(500).json({ "message": err })
        })
};
