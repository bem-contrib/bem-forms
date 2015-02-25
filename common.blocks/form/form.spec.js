modules.define('spec',
    ['form', 'BEMHTML', 'i-bem__dom'],
    function(provide, Form, BEMHTML, BEMDOM) {

    describe('form fields manipulating', function() {

        var form;

        beforeEach(function() {
            form = buildForm();
        });

        it.skip('should can add form-field to the end of form', function() {
            form.getFields().length.should.be.eq(0);

            form.addField.after(null, {
                block : 'form-field',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFields().length.should.be.eq(1);
        });

        it.skip('should can add form-field after block', function() {
            form.getFields().length.should.be.eq(0);

            form.addField.after(this.findBlockInside('form-field'), {
                block : 'form-field',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFields().length.should.be.eq(1);
        });

        it.skip('should can add form-field before block', function() {
            form.getFields().length.should.be.eq(1);

            form.addField.before(this.findBlockInside('form-field'), {
                block : 'form-field',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFields().length.should.be.eq(2);
        });

        it.skip('should can find form-field by name', function() {
            form.addField.after(null, {
                block : 'form-field',
                name : 'firstName',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFieldByName('firstName');
        });

        it.skip('should can delete form-field by name', function() {
            form.addField.after(null, {
                block : 'form-field',
                name : 'lastName',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.delFieldByName('lastName');
        });

        it.skip('should can rebuild tab-index', function() {
            form.getFields().length.should.be.eq(0);

            form.addField.after(null, {
                block : 'form-field',
                name : 'firstName',
                mods : { type : 'input' },
                content : [
                    { block : 'input' }
                ]
            });

            form.getFieldByName('firstName').getIndex().should.be.eq(1);

            form.addField.before(form.getFieldByName('firstName'), {
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
