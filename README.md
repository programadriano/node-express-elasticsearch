# node-express
Projeto criado para demonstrar como podemos criar uma API em Node.js + Elasticsearch

# Docker
Open a terminal and execute this command bellow to run elasticsearch

`docker network create mediumnetwork`
`docker run -d --name elasticsearch --net mediumnetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.13.2`

# Run project
Execute this `npm start` in your terminal

