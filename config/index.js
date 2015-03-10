'use strict';

var config = {};

module.exports = {

    init: function (e) {
        config = require('./' + e);
    },
    get: function (key) {
        return config[key];
    }

}
