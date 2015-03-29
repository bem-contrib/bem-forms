modules.define('spec',
    ['form', 'BEMHTML', 'i-bem__dom'],
    function(provide, Form, BEMHTML, BEMDOM) {

    describe('form fields manipulating', function() {

        var form;

        beforeEach(function() {
            form = buildForm();
        });

        it.skip('should find form-field by name', function() {
            BEMDOM.append(form.domElem, {
                block : 'form-field',
                name : 'firstName',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFieldByName('firstName').getName().should.be.eq('firstName');
        });

        it.skip('should rebuild tab-index', function() {
            form.getFields().length.should.be.eq(0);

            BEMDOM.append(form.domElem, {
                block : 'form-field',
                name : 'firstName',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFieldByName('firstName').getIndex().should.be.eq(1);

            BEMDOM.prepend(form.domElem, {
                block : 'form-field',
                name : 'lastName',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFields().length.should.be.eq(2);

            form.getFieldByName('firstName').getIndex().should.be.eq(2);
            form.getFieldByName('lastName').getIndex().should.be.eq(1);
        });

    });

    function buildForm() {

    }

    provide();
});
