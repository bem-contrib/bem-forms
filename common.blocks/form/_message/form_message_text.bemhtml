block('form').mod('message', 'text')(
    content()(function() {
        var ctx = this.ctx;

        return [
            applyNext(),
            {
                block : 'message',
                mods : { type : 'text', theme : ctx.mods.theme },
                mix : { block : ctx.block, elem : 'message' }
            }
        ];
    })
);
