'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "baskets", deps: []
 * createTable "products", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-11-14T23:22:17.775Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "baskets",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "title": {
                    "type": Sequelize.STRING,
                    "field": "title"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "image": {
                    "type": Sequelize.STRING,
                    "field": "image"
                },
                "price": {
                    "type": Sequelize.INTEGER,
                    "field": "price"
                },
                "availableSizes": {
                    "type": Sequelize.STRING,
                    "field": "availableSizes"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "products",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "title": {
                    "type": Sequelize.STRING,
                    "field": "title"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "image": {
                    "type": Sequelize.STRING,
                    "field": "image"
                },
                "price": {
                    "type": Sequelize.INTEGER,
                    "field": "price"
                },
                "quantity": {
                    "type": Sequelize.INTEGER,
                    "field": "quantity"
                },
                "availableSizes": {
                    "type": Sequelize.STRING,
                    "field": "availableSizes"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
