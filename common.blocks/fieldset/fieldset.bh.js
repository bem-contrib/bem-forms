module.exports = function(bh) {

    bh.match('fieldset', function(ctx, json) {
        ctx.tag('fieldset');

        ctx.content([
            json.legend && {
                elem : 'legend',
                content : json.legend
            },
            {
                elem : 'content',
                content : json.content
            }
        ]);
    });

};
