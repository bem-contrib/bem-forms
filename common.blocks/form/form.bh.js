module.exports = function(bh) {

    bh.match('form', function(ctx, json) {

        ctx
            .tag('form')
            .js(true)
            .attrs({
                action : json.action,
                method : json.method
            });

    });

};
