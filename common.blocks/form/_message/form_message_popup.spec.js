modules.define('spec',
    ['form', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, Form, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('form_message_popup', function() {

    var form;

    beforeEach(function() {
        form = bemDom.init($(BEMHTML.apply({
            block : 'form',
            mods : { message : 'popup' }
        })).appendTo('body')).bem('form');
    });

    afterEach(function() {
        bemDom.destruct(form.domElem);
    });

    it.skip('should set anchor for popup');

    it.skip('should set val to message');

    it.skip('should get val from message');

    it.skip('should set invalid mod to message on validation error');
});

provide();

});
