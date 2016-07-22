modules.define('spec',
    ['form-field', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_type_input', function() {

    var formField;

    beforeEach(function() {
        formField = bemDom.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'input' },
            content : { block : 'input' }
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        bemDom.destruct(formField.domElem);
    });

    it.skip('should set val to input');

    it.skip('should get val to input');

    it.skip('should get input name');

    it.skip('should set invalid mod to input');
});

provide();

});
