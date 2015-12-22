modules.define('spec',
    ['message', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai', 'popup'],
    function(provide, Message, BEMDOM, $, BEMHTML, chai, Popup) {

var expect = chai.expect;

describe('message_type_popup', function() {

    var message;

    beforeEach(function() {
        message = BEMDOM.init($(BEMHTML.apply({
            block : 'message',
            mods : { type : 'popup' }
        })).appendTo('body')).bem('message');
    });

    afterEach(function() {
        BEMDOM.destruct(message.domElem);
    });

    it('should set val to the popup', function() {
        var val = 'Test message';
        message.setVal(val);
        message.getPopup().domElem.html().should.be.eq(val);
    });

    it('should return val from the popup', function() {
        var val = 'Test message';
        message.setVal(val);
        message.getVal().should.be.eq(val);
    });

    it('should invisible by default and visible after show', function() {
        message.hasMod('showed').should.be.false;
        message.getPopup().hasMod('visible').should.be.false;
        message.show();
        message.hasMod('showed').should.be.true;
        message.getPopup().hasMod('visible').should.be.true;
    });

    it('should invisible after hide', function() {
        message.setMod('showed', true);
        message.hide();
        message.hasMod('showed').should.be.false;
        message.getPopup().hasMod('visible').should.be.false;
    });

    it('should toggle visibility', function() {
        message.toggle();
        message.hasMod('showed').should.be.true;
        message.getPopup().hasMod('visible').should.be.true;
        message.toggle();
        message.hasMod('showed').should.be.false;
        message.getPopup().hasMod('visible').should.be.false;
    });

});

provide();

});
