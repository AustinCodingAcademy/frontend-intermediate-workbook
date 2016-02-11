'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

    // Your code here
    word = word.toLowerCase();
    var firstLetter = word[0];
    var index;
    index = word.search(/[aeiou]/);
    if (index <= 0) {
        return word + "yay";
    } else {
        return word.substring(index, word.length) + word.substring(0, index) + "ay";
    }
}
console.log(pigLatin('street'));



function getPrompt() {
    prompt.get(['word'], function (error, result) {

        console.log(pigLatin(result['word']));

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#pigLatin()', function () {
        it('should translate a simple word', function () {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', function () {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', function () {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should auto lowercase word before translation', function () {
            assert.equal(pigLatin('HeLlO'), 'ellohay');
            assert.equal(pigLatin('RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}