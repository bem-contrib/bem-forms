modules.define('spec',
    ['i-bem-dom', 'jquery', 'BEMHTML', 'form-field'],
    function(provide, bemDom, $, BEMHTML) {

describe('form-field_type_hidden', function() {

    var formField;

    beforeEach(function() {
        formField = bemDom.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'hidden', message : 'text' },
            name : 'hidden',
            val : 'value'
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        bemDom.destruct(formField.domElem);
    });

    it('should return value on getVal', function() {
        formField.getVal().should.equal('value');
    });

    it('should allow to change value', function() {
        formField.setVal('new');
        formField.getVal().should.equal('new');
    });
});

provide();

});
