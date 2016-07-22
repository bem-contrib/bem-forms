modules.define('spec',
    ['i-bem-dom', 'jquery', 'BEMHTML', 'form', 'form-field', 'input'],
    function(provide, bemDom, $, BEMHTML, Form) {

describe('form', function() {

    var form;

    beforeEach(function() {
        form = bemDom.init($(BEMHTML.apply({
            block : 'form'
        })).appendTo('body')).bem(Form);
    });

    afterEach(function() {
        bemDom.destruct(form.domElem);
    });

    it('should find form-field by name', function() {
        bemDom.append(form.domElem, BEMHTML.apply({
            block : 'form-field',
            name : 'firstName',
            mods : { type : 'input' },
            content : { block : 'input' }
        }));

        form.getFieldByName('firstName').getName().should.be.eq('firstName');
    });

});

provide();

});
