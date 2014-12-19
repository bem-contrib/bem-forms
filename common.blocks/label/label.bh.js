module.exports = function(bh) {

    bh.match('label', function(ctx, json) {
        ctx
            .tag('label')
            .attrs({ for : json.for });
    });

};
