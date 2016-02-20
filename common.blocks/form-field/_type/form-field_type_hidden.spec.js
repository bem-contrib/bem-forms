modules.define('spec',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'form-field'],
    function(provide, BEMDOM, $, BEMHTML) {

describe('form-field_type_hidden', function() {

    var formField;

    beforeEach(function() {
        formField = BEMDOM.init($(BEMHTML.apply({
            block : 'form-field',
            mods : { type : 'hidden', message : 'text' },
            name : 'hidden',
            val : 'value'
        })).appendTo('body')).bem('form-field');
    });

    afterEach(function() {
        BEMDOM.destruct(formField.domElem);
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
