module.exports = function(bh) {

    bh.match('message_type_text', function(ctx) {
        ctx.mix({ elem : 'control' });
    });

};
