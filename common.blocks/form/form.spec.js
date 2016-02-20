modules.define('spec',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'form', 'form-field'],
    function(provide, BEMDOM, $, BEMHTML) {

describe('form', function() {

    var form;

    beforeEach(function() {
        form = BEMDOM.init($(BEMHTML.apply({
            block : 'form'
        })).appendTo('body')).bem('form');
    });

    afterEach(function() {
        BEMDOM.destruct(form.domElem);
    });

    it('should find form-field by name', function() {
        BEMDOM.append(form.domElem, BEMHTML.apply({
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
