modules.define('spec',
    ['message', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, Message, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('message_type_text', function() {

    var message;

    beforeEach(function() {
        message = bemDom.init($(BEMHTML.apply({
            block : 'message',
            mods : { type : 'text' }
        })).appendTo('body')).bem(Message);
    });

    afterEach(function() {
        bemDom.destruct(message.domElem);
    });

    it('should set val to the DOM', function() {
        var val = 'Test message';
        message.setVal(val);
        message.domElem.html().should.be.eq(val);
    });

    it('should return val from the DOM', function() {
        var val = 'Test message';
        message.setVal(val);
        message.getVal().should.be.eq(val);
    });

    it('should invisible by default and visible after show', function() {
        message.hasMod('showed').should.be.false;
        message.show();
        message.hasMod('showed').should.be.true;
    });

    it('should invisible after hide', function() {
        message.setMod('showed', true);
        message.hide();
        message.hasMod('showed').should.be.false;
    });

    it('should toggle visibility', function() {
        message.toggle();
        message.hasMod('showed').should.be.true;
        message.toggle();
        message.hasMod('showed').should.be.false;
    });

});

provide();

});
