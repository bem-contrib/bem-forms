block('form-field').mod('type', 'hidden')(
    content()(function() {
        var ctx = this.ctx;
        return [
            {
                tag : 'input',
                attrs : {
                    type : 'hidden',
                    name : ctx.name,
                    id : ctx.id,
                    value : ctx.val
                }
            }
        ];
    })
);
