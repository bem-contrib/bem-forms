module.exports = function(bh) {

    bh.match('form', function(ctx, json) {
        ctx.tag('form');
        ctx.js(true);

        ctx.attrs({
            action : json.action,
            method : json.method
        });

    });

};
