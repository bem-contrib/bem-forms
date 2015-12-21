block('message').mod('type', 'popup')(
    content()(function() {
        var ctx = this.ctx;

        return [{
            block : 'popup',
            directions : ctx.directions,
            mods : {
                target : 'anchor',
                theme : ctx.mods.theme,
                size : ctx.mods.size
            },
            mix : { block : ctx.block, elem : 'control' }
        }];
    })
);
