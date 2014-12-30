module.exports = function(bh) {

    bh.match('form__field', function(ctx, json) {

        ctx
            .js(true);

    });

};
