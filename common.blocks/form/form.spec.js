modules.define('spec',
    ['form', 'BEMHTML', 'i-bem__dom', 'jquery'],
    function(provide, Form, BEMHTML, BEMDOM, $) {

describe('form', function() {

    var form;

    beforeEach(function() {
        form = buildForm({
            block : 'form'
        });
    });

    afterEach(function() {
        BEMDOM.destruct(form.domElem);
    });

    it('should find form-field by name', function() {
        BEMDOM.append(form.domElem, BEMHTML.apply({
            block : 'form-field',
            name : 'firstName',
            mods : { type : 'input' },
            content : [
                { block : 'input' }
            ]
        }));

        form.getFieldByName('firstName').getName().should.be.eq('firstName');
    });

    it.skip('should rebuild tab-index', function() {
        form.getFields().length.should.be.eq(0);

        BEMDOM.append(form.domElem, BEMHTML.apply({
            block : 'form-field',
            name : 'firstName',
            mods : { type : 'input' },
            content : [
                { block : 'input' }
            ]
        }));

        form.getFieldByName('firstName').getIndex().should.be.eq(1);

        BEMDOM.prepend(form.domElem, BEMHTML.apply({
            block : 'form-field',
            name : 'lastName',
            mods : { type : 'input' },
            content : [
                { block : 'input' }
            ]
        }));

        form.getFields().length.should.be.eq(2);

        form.getFieldByName('firstName').getIndex().should.be.eq(2);
        form.getFieldByName('lastName').getIndex().should.be.eq(1);
    });

});

function buildForm(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem('form');
}

provide();

});
