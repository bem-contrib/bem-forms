modules.define('spec',
    ['form-field', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, BEMDOM, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_type_textarea', function() {

    var formField;

    beforeEach(function() {
        formField = BEMDOM.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'textarea' },
            content : { block : 'textarea' }
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        BEMDOM.destruct(formField.domElem);
    });

    it.skip('should set val to textarea');

    it.skip('should get val to textarea');

    it.skip('should get textarea name');

    it.skip('should set invalid mod to textarea');
});

provide();

});
