block('form-field').mod('message', 'popup')(
    content()(function() {
        var ctx = this.ctx;

        return [
            applyNext(),
            {
                block : 'message',
                mods : {
                    type : 'popup',
                    theme : ctx.mods.theme,
                    size : ctx.mods.size
                },
                mix : { block : ctx.block, elem : 'message' },
                directions : ctx.directions
            }
        ];
    })
);
