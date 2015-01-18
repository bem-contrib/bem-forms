module.exports = function(bh) {

    bh.match('form__field', function(ctx) {

        ctx
            .js(true)
            .mix({ block : 'i-bem' });

    });

};
