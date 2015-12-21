modules.define('spec',
    ['form-field', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, BEMDOM, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_type_checkbox-group', function() {

    var formField;

    beforeEach(function() {
        formField = BEMDOM.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'checkbox-group' },
            content : {
                block : 'checkbox-group',
                options : [
                    { text : '1', val : '1' },
                    { text : '2', val : '2' }
                ]
            }
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        BEMDOM.destruct(formField.domElem);
    });

    it.skip('should set val to checkbox-group');

    it.skip('should get val to checkbox-group');

    it.skip('should get checkbox-group name');

    it.skip('should set invalid mod to checkbox-group');
});

provide();

});
