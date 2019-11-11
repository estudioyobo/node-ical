/** **
 * Tests
 *
 *
 ** */
process.env.TZ = 'America/San_Francisco';

const vows = require('vows');
const assert = require('assert');
const _ = require('underscore');
const ical = require('../index');

vows.describe('node-ical')
    .addBatch({
        'url request errors': {
            'topic': function() {
                ical.fromURL('http://255.255.255.255/', {}, this.callback);
            },
            'are passed back to the callback': function(err, result) {
                assert.instanceOf(err, Error);
                if (!err) {
                    console.log('>E:', err, result);
                }
            },
        },
    })
    .export(module);
