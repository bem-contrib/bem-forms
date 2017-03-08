module.exports = function(bh) {

    bh.match('form-field_message_popup', function(ctx, json) {
        ctx.content([
            ctx.content(),
            {
                block : 'message',
                mods : { type : 'popup', theme : json.mods.theme, size : json.mods.size },
                mix : { block : json.block, elem : 'message' },
                directions: json.directions
            }
        ], true);
    });

};
