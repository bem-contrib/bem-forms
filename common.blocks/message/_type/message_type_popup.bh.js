module.exports = function(bh) {

    bh.match('message_type_popup', function(ctx, json) {
        ctx.content({
            block : 'popup',
            directions : ['left-center', 'right-center'],
            mods : { target : 'anchor', theme : json.mods.theme, size : json.mods.size },
            mix : { block : json.block, elem : 'control' }
        }, true);
    });

};
