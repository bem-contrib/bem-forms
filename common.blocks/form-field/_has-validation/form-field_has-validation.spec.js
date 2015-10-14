// FIXME: this spec don't work without https://github.com/narqo/bem-pr/pull/90
modules.define('spec', ['spec__utils', 'sinon', 'input', 'message', 'form-field'], function(provide, utils, sinon) {

    describe('form-field_has-validation', function() {

        var block, bemjson;

        beforeEach(function() {
            bemjson = {
                block : 'form-field',
                    mods : {
                    'has-validation' : true
                }
            };
        });

        afterEach(function() {
            block && utils.destruct(block);
        });

        it('should not throw without `type` mod', function() {
            block = utils.buildBlock('form-field', bemjson);
            block.getVal().should.equal('');
        });

        it('should call show message when changes status focused', function() {
            bemjson.mods.type = 'input';
            bemjson.mods.message = 'text';
            bemjson.content = {
                elem : 'control',
                content : {
                    block : 'input',
                    val : 'XXX'
                }
            };
            block = utils.buildBlock('form-field', bemjson);

            // should not show for valid block
            block.getControl().elem('control').focus();
            var spy = sinon.spy(block.getMessage(), 'show');
            block._updateStatus();
            (!!spy.called).should.be.false;

            // should show for invalid block
            block._status = 'error';
            block._updateStatus();
            (!!spy.called).should.be.true;
        });

    });

    provide();
});
