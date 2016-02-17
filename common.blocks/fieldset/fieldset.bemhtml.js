block('fieldset')(

    tag()('fieldset'),

    content()(function() {
        return [
            this.ctx.legend && {
                elem : 'legend',
                content : this.ctx.legend
            },
            {
                elem : 'content',
                content : applyNext()
            }
        ];
    }),

    elem('legend').tag()('legend')
);
