modules.define('spec',
    ['form-field', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_message_popup', function() {

    var formField;

    beforeEach(function() {
        formField = bemDom.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { message : 'popup' }
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        bemDom.destruct(formField.domElem);
    });

    it.skip('should set anchor for popup');

    it.skip('should set val to message');

    it.skip('should get val from message');

    it.skip('should set invalid mod to message on validation error');
});

provide();

});
