modules.define('spec',
    ['form-field', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, FormField, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form-field', function() {

    var formField;

    beforeEach(function() {
        formField = bemDom.init($(BEMHTML.apply({
            block : 'form-field'
        })).appendTo('body')).bem(FormField);
    });

    afterEach(function() {
        bemDom.destruct(formField.domElem);
    });

    it.skip('should get id');

    it.skip('should require dirty mechanic');

    it.skip('should exec validators on blur');

    it.skip('should update status after validation');

    it.skip('should set status manually');

    it.skip('should set validations messages');

    it.skip('should set one validation message');

    it.skip('should disable label and control in disable mod');

});

provide();

});
