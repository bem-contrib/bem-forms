module.exports = function(bh) {

    bh.match('validate', function(ctx, json) {

        ctx
            .js(true);

    });

};
