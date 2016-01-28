module.exports = function(bh) {

    bh.match('form_has-validation', function(ctx) {
        ctx.attr('novalidate', true);
    });

};
