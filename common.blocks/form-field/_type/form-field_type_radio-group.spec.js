modules.define('spec',
    ['form-field', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field_type_radio-group', function() {

    var formField;

    beforeEach(function() {
        formField = bemDom.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'radio-group' },
            content : {
                block : 'radio-group',
                options : [
                    { text : '1', val : '1' },
                    { text : '2', val : '2' }
                ]
            }
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        bemDom.destruct(formField.domElem);
    });

    it.skip('should set val to radio-group');

    it.skip('should get val to radio-group');

    it.skip('should get radio-group name');

    it.skip('should set invalid mod to radio-group');
});

provide();

});
