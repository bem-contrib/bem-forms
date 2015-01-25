module.exports = function(bh) {

    bh.match('form_message_text', function(ctx, json) {
        ctx.content([
            {
                block : 'message',
                mods : { type : 'text', theme : json.mods.theme },
                mix : { block : json.block, elem : 'message' }
            },
            ctx.content()
        ], true);
    });

};
