const elastic = require('elasticsearch');

elasticClient = elastic.Client({
    host: 'http://127.0.0.1:9200'
});

module.exports = elasticClient;