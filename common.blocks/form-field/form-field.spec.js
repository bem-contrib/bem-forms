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

//describe('form-field_has-validation', function() {
//
//    var block, bemjson;
//
//    beforeEach(function() {
//        bemjson = {
//            block : 'form-field',
//            mods : {
//                'has-validation' : true
//            }
//        };
//    });
//
//    afterEach(function() {
//        block && utils.destruct(block);
//    });
//
//    it('should not throw without `type` mod', function() {
//        block = utils.buildBlock('form-field', bemjson);
//        block.getVal().should.equal('');
//    });
//
//    it('should call show message when changes status focused', function() {
//        bemjson.mods.type = 'input';
//        bemjson.mods.message = 'text';
//        bemjson.content = {
//            elem : 'control',
//            content : {
//                block : 'input',
//                val : 'XXX'
//            }
//        };
//        block = utils.buildBlock('form-field', bemjson);
//
//        // should not show for valid block
//        block.getControl().elem('control').focus();
//        var spy = sinon.spy(block.getMessage(), 'show');
//        block._updateStatus();
//        (!!spy.called).should.be.false;
//
//        // should show for invalid block
//        block._status = 'error';
//        block._updateStatus();
//        (!!spy.called).should.be.true;
//    });
//
//});
