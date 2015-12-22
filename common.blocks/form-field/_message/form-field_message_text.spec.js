modules.define('spec',
    ['form-field', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, BEMDOM, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_message_text', function() {

    var formField;

    beforeEach(function() {
        formField = BEMDOM.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { message : 'text' }
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        BEMDOM.destruct(formField.domElem);
    });

    it.skip('should set val to message');

    it.skip('should get val from message');
});

provide();

});
