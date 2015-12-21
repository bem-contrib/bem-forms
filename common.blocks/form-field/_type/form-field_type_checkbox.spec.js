modules.define('spec',
    ['form-field', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, BEMDOM, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_type_checkbox', function() {

    var formField;

    beforeEach(function() {
        formField = BEMDOM.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'checkbox' },
            content : { block : 'checkbox', text : 'checkbox' }
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        BEMDOM.destruct(formField.domElem);
    });

    it.skip('should set val to checkbox');

    it.skip('should get val to checkbox');

    it.skip('should get checkbox name');

    it.skip('should set invalid mod to checkbox');
});

provide();

});
