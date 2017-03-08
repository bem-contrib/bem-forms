block('form-field').mod('type', 'hidden')(
    js()(function () {
        return { name : this.ctx.name, value : this.ctx.val };
    }),
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
