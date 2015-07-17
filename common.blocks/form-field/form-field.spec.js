modules.define('spec',
    ['form-field'],
    function(provide, FormField) {

    describe('form fields manipulating', function() {

        var formField;

        beforeEach(function() {
            formField = buildFormField();
        });

        it.skip('should get tab-index', function() {
            formField.getIndex().should.be.eq(1);
        });

        it.skip('should set tab-index', function() {
            formField.getIndex().should.be.eq(1);
            formField.setIndex(-1);
            formField.getIndex().should.be.eq(-1);
        });

    });

    function buildFormField() {

    }

    provide();
});
