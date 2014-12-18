module.exports = function(bh) {

    bh.match('form__label', function(ctx, json) {
        ctx.tag('label');
        ctx.attrs({ for : json.id });
    });

};
