modules.define('spec',
    ['form-field', 'BEMHTML', 'i-bem__dom'],
    function(provide, FormField, BEMHTML, BEMDOM) {

    describe('form fields manipulating', function() {

        var formField;

        beforeEach(function() {
            formField = buildFormField();
        });

        it.skip('should can get tab-index', function() {
            formField.getIndex().should.be.eq(1);
        });

        it.skip('should can set tab-index', function() {
            formField.getIndex().should.be.eq(1);
            formField.setIndex(-1).should.be.eq(-1);
        });

    });

    function buildFormField() {

    }

    provide();
});
